"use client";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import "./styles.css";
import { useState } from "react";
import { ModalMainPage } from "../ModalMainPage";
import { MaintenanceForm } from "../Forms/Maintenance/MaintenanceForm";
import { StockForm } from "../Forms/Stock/StockForm";
import { ProductionForm } from "../Forms/Production/ProductionForm";
import { usePathname, useRouter } from "next/navigation";
import { API } from "@/api";
import { CreateProductForm } from "../Forms/Stock/createProduct/CreateProduct";

interface Production {
  vehicleProduced: string;
  quantity: number;
  dateStart: Date | null;
  vehicleComposition: {
    productId: string;
    quantityPerVehicle: number;
  }[];
}

interface CompositionProduct {
  product: Product;
  quantity: number;
}

//o modal ta la em baixo
type MainPageProps = {
  namePage?: string;
  moduloPage?: string;
  header: string[];
  ulItens?: {
    li1: any;
    li2: any;
    li3: any;
    li4: any;
    li5?: any;
  }[];
  isProduction?: boolean;
  numberProduction?: number;
  getTemplate: () => Promise<void>;
};

export default function MainPage({
  namePage,
  moduloPage,
  header,
  ulItens,
  isProduction = false,
  numberProduction,
  getTemplate,
}: MainPageProps) {
  const [showForm, setShowForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const [selectedProductionId, setSelectedProductionId] = useState<string>("");
  const [modalType, setModalType] = useState<
    "maintenance" | "stock" | "production" | null
  >(null);
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);

  const toggleSelected = (index: number) => {
    setSelectedIndex(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Se já está selecionado, remove
          : [...prev, index] // Se não está, adiciona
    );
  };

  const router = useRouter();
  const handleNavigation = () => {
    router.push("/production_dashboard");
  };

  const pathName = usePathname();

  let typeModal: "stock" | "maintenance" | "production";

  if (pathName === "/stock") {
    typeModal = "stock";
  } else if (pathName === "/maintenance") {
    typeModal = "maintenance";
  } else {
    typeModal = "production";
  }

  const handleOpen = (
    type: "maintenance" | "stock" | "production",
    id: string,
    idProduction: string
  ) => {
    setModalType(type);
    setOpenModal(true);
    setSelectedId(id);
    setSelectedProductionId(idProduction);
  };

  const handleClose = async () => {
    setOpenModal(false);
    setModalType(null);
    await getTemplate();
  };

  const handleDelete = async (id: string) => {
    let endpoint = "";

    if (pathName === "/stock") {
      endpoint = "/product/delete";
    } else if (pathName === "/maintenance") {
      endpoint = "/maintenance/delete";
    } else {
      endpoint = "/production/delete";
    }

    try {
      await API.delete(endpoint, {
        data: { id },
      });
      await getTemplate(); // Atualiza os dados
    } catch (error: any) {
      console.error(
        "Erro ao deletar item:",
        error.response?.data || error.message
      );
      alert(
        "Erro ao deletar item: " + (error.response?.data?.erro || error.message)
      );
    }
  };

  ///parte de producao

  const [vehicle, setVehicle] = useState<string>("");
  const [quantityProduced, setQuantityProduced] = useState<number>(0);
  const [dateStartInfo, setDateStart] = useState<Date | null>(null);
  const [composition, setComposition] = useState<CompositionProduct[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddProduct({ product, quantity }: CompositionProduct) {
    setComposition((prev) => [...prev, { product, quantity }]);
    console.log(composition);
  }

  async function handleCreateNewProduction() {
    const vehicleComposition = composition.map((item) => ({
      productId: item.product.id,
      quantityPerVehicle: item.quantity,
    }));

    const newProduction: Production = {
      vehicleProduced: vehicle,
      quantity: quantityProduced,
      dateStart: dateStartInfo,
      vehicleComposition: vehicleComposition,
    };

    try {
      await API.post("/production/create", newProduction);
      setVehicle("");
      setQuantityProduced(0);
      setDateStart(null);
      setComposition([]);
      window.alert("Produção criada.");
    } catch (error) {
      console.log(error);
      console.log("caiu no catch");
    }
  }

  return (
    <section className="body-container">
      <header className="div-top">
        <h1>{namePage}</h1>
        <span></span>
        <h3>{moduloPage}</h3>
      </header>

      <div className="header">
        <ul>
          <li>{header[0]}</li>
          <li>{header[1]}</li>
          <li>{header[2]}</li>
          <li>{header[3]}</li>
          <li>{header[4]}</li>
          <li>{header[5]}</li>
        </ul>
      </div>
      {!isProduction ? (
        <div className="datagrid">
          {pathName === "/stock" && (
            <div className="formNewProduct">
              <button
                className="btn-addNewProduct"
                onClick={() => setShowForm(!showForm)}
              >
                {showForm ? <>Fechar formulário</> : <>Cadastrar produto</>}
              </button>

              {showForm && <CreateProductForm onSuccess={() => getTemplate}/>}
            </div>
          )}
          <ul>
            {ulItens?.map((item, index) => (
              // Aqui vai ficar o quadradinho azul !!!
              <li key={index}>
                <span
                  className={
                    selectedIndex.includes(index)
                      ? "span-selected"
                      : "inative-span"
                  }
                  onClick={() => toggleSelected(index)}
                ></span>
                <span>{item.li1}</span>
                <span>{item.li2}</span>
                <span>{item.li3}</span>
                <span>{item.li4}</span>
                <div className="btns-action">
                  <button className="edit">
                    <LuPencil
                      size={25}
                      color="white"
                      onClick={() => {
                        {
                          handleOpen(typeModal, item.li5, item.li1);
                          console.log("abrindo modal com ID:", item.li5);
                        }
                      }}
                    ></LuPencil>
                  </button>
                  <button
                    className="delete"
                    onClick={() => {
                      console.log("deletando modal com ID:", item.li5);
                      handleDelete(item.li5);
                    }}
                  >
                    <FaRegTrashCan size={25} color="white"></FaRegTrashCan>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="formProd">
          <form className="production-area">
            <h3>Ordem de Produção Nº {numberProduction}</h3>

            <div className="name-and-qtd">
              <label htmlFor="text">O que será produzido?</label>
              <input
                type="text"
                name="nameProduct"
                id="nameProduct"
                required
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
              />
              <label htmlFor="text">Quantidade</label>
              <input
                type="number"
                name="qtdProduct"
                id="qtdProduct"
                required
                value={quantityProduced}
                onChange={(e) => setQuantityProduced(e.target.valueAsNumber)}
              />
            </div>

            <div className="itens-and-date">
              <div className="composicao">
                <h3>Composição</h3>
                <div className="composicao-items">
                  {composition.length > 0 ? (
                    <ul className="list-composition">
                      {composition.map((item) => (
                        <li key={item.product.id} className="listed-itens">
                          Nome: {item.product.description}
                          <br />
                          Quantidade adicionada(por veículo): {item.quantity}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div>
                      Nenhum item adicionado. Comece a adicionar itens para a
                      sua produção! :D
                    </div>
                  )}
                </div>

                <IoMdAdd
                  size={30}
                  color="#1A73E8"
                  onClick={() => {
                    handleOpen(typeModal, "", "");
                    setIsModalOpen(true);
                  }}
                />
              </div>

              <div className="datas-btns">
                <label htmlFor="text">Data de ínicio</label>
                <input
                  type="datetime-local"
                  name="start"
                  id="startProduction"
                  required
                  onChange={(e) => {
                    const value = e.target.value;
                    setDateStart(value ? new Date(value) : null);
                  }}
                />

                <div className="btns-production-actions">
                  <button
                    type="button"
                    className="close"
                    onClick={handleNavigation}
                  >
                    X
                  </button>
                  <button
                    type="button"
                    className="production"
                    onClick={() => handleCreateNewProduction()}
                  >
                    Produzir
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}

      <ModalMainPage open={openModal} handleClose={() => handleClose()}>
        {modalType === "maintenance" && (
          <MaintenanceForm
            id={selectedId}
            idProduction={selectedProductionId}
            onSuccess={() => {
              handleClose();
              getTemplate();
            }}
          />
        )}
        {modalType === "stock" && (
          <StockForm
            code={selectedId}
            onSuccess={() => {
              handleClose();
              getTemplate();
            }}
          />
        )}
        {modalType === "production" && (
          <ProductionForm
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAddProduct={handleAddProduct}
          />
        )}
      </ModalMainPage>
    </section>
  );
}
