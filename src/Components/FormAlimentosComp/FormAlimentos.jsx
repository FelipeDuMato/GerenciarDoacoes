import { Card, Col, Row, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

function FormAlimentos({ onSave, onCancel }) {

  // Estados
  const [doaAlimentos, setDoaAlimentos] = useState({
    data: "",
    item: "",
    quantidade: "",
    descricao: "",
    destinatario: "",
    doador: "",
    telefone: "",
    evento: "",
    observacoes: ""
  });

  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});
  const [dataAlimentos, setDataAlimentos] = useState("");
  const [itemAlimentos, setItemAlimentos] = useState("");
  const [quantidadeAlimentos, setQuantidadeAlimentos] = useState("");
  const [descricaoAlimentos, setDescricaoAlimentos] = useState("");
  const [destinatarioAlimentos, setDestinatarioAlimentos] = useState("");
  const [doadorAlimentos, setDoadorAlimentos] = useState("");
  const [telefoneAlimentos, setTelefoneAlimentos] = useState("");
  const [eventoAlimentos, setEventoAlimentos] = useState("");
  const [observacoesAlimentos, setObservacoesAlimentos] = useState("");
  const [showAlert, setShowAlert] = useState(false);


  // Funções de manipulação de eventos

  const handleChangleData = (e) => {
    const value = e.target.value;
    setDataAlimentos(value);
    if (value && new Date(value) < new Date()) {
      setErrors((prev) => ({ ...prev, data: null }));
    } else {
      if (value === "") {
        setErrors((prev) => ({ ...prev, data: "A data deve ser preenchida" }));
        setValidated(false);
      } else {
        setErrors((prev) => ({ ...prev, data: "A data não pode ser maior do que hoje" }))
        setValidated(false);
      }
    }
  }

  const handleChangeItem = (e) => {
    const value = e.target.value.replace(/[0-9]/g, '');
    setItemAlimentos(value);
    if (value && isNaN(value)) {
      setErrors((prev) => ({ ...prev, item: null }));
    } else {
      if (value === "") {
        setErrors((prev) => ({ ...prev, item: "O item doado deve ser preenchido" }));
        setValidated(false);
      } else if (!isNaN(value)) {
        setErrors((prev) => ({ ...prev, item: "O item doado deve ser um texto válido" }));
        setValidated(false);
      }
    }
  }

  const handleChangeQuantidade = (e) => {
    const value = e.target.value.replace(/[a-zA-Z]/g, '');
    setQuantidadeAlimentos(value);
    if (value && !isNaN(value) && parseInt(value) >= 0) {
      setErrors((prev) => ({ ...prev, quantidade: null }));
    } else {
      if (value === "") {
        setErrors((prev) => ({ ...prev, quantidade: "A quantidade deve ser preenchida" }));
        setValidated(false);
      } else {
        if (isNaN(value) || parseInt(value) < 0) {
          setErrors((prev) => ({ ...prev, quantidade: "Quantidade inválida" }));
          setValidated(false);
        }
      }
    }
  }

  const handleChangeDescricao = (e) => {
    const value = e.target.value;
    setDescricaoAlimentos(value);
    if (value && isNaN(value)) {
      setErrors((prev) => ({ ...prev, descricao: null }));
    } else {
      if (value === "") {
        setErrors((prev) => ({ ...prev, descricao: "A descrição deve ser preenchida" }));
        setValidated(false);
      } else if (!isNaN(value)) {
        setErrors((prev) => ({ ...prev, descricao: "A descrição deve ser um texto válido" }));
        setValidated(false);
      }
    }
  }
  const handleChangeDestinatario = (e) => {
    const value = e.target.value;
    setDestinatarioAlimentos(value);
    if (value && isNaN(value)) {
      setErrors((prev) => ({ ...prev, destinatario: null }));
    } else {
      if (value === "") {
        setErrors((prev) => ({ ...prev, destinatario: "Por favor, selecione um destinatário" }));
        setValidated(false);
      }
    }
  }

const handleChangeDoador = (e) => {
  const value = e.target.value.replace(/[0-9]/g, '');
  setDoadorAlimentos(value);
}

const handleChangeTelefone = (e) => {
  const value = e.target.value;
        const numeros = value.replace(/\D/g, '');

        let formatado = '';

        if (numeros.length <= 10) {
            // (XX) XXXX-XXXX
            formatado = numeros.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else {
            // (XX) 9XXXX-XXXX
            formatado = numeros.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        }
        setTelefoneAlimentos(formatado); // Atualiza o estado com o valor formatado
    }

const handleChangeEvento = (e) => {
  const value = e.target.value;
  setEventoAlimentos(value);
}

const handleChangeObservacoes = (e) => {
  const value = e.target.value;
  setObservacoesAlimentos(value);
}

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    let newErrors = {};
    if (!form.checkValidity()) {
      e.stopPropagation();
    }

    if (!dataAlimentos) {
      newErrors.data = "A data deve ser preenchida";
      setValidated(false);
    } else if (new Date(dataAlimentos) > new Date()) {
      newErrors.data = "A data não pode ser maior do que hoje";
      setValidated(false);
    }
    if (!itemAlimentos) {
      newErrors.item = "O item doado deve ser preenchido";
      setValidated(false);
    } else if (!isNaN(itemAlimentos)) {
      newErrors.item = "O item doado deve ser um texto válido";
      setValidated(false);
    }
    if (!quantidadeAlimentos) {
      newErrors.quantidade = "A quantidade deve ser preenchida";
      setValidated(false);
    } else if (isNaN(quantidadeAlimentos) || parseInt(quantidadeAlimentos) < 0) {
      newErrors.quantidade = "Quantidade inválida";
      setValidated(false);
    }
    if (!descricaoAlimentos) {
      newErrors.descricao = "A descrição deve ser preenchida";
      setValidated(false);
    } else if (!isNaN(descricaoAlimentos)) {
      newErrors.descricao = "A descrição deve ser um texto válido";
      setValidated(false);
    }
    if (!destinatarioAlimentos) {
      newErrors.destinatario = "Por favor, selecione um destinatário";
      setValidated(false);
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setValidated(true);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    };
}



return (
  // Formulário comum
  <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Alert variant="success" show={showAlert}> <b> <FaCheckCircle></FaCheckCircle> </b> Doação cadastrada com sucesso! </Alert>
    <Row>
      <Col md={6}>
        <Card className="mb-4">
          <Card.Body>
            <Card.Title className="mb-4"><h5>Informações da Doação</h5></Card.Title>
            <Form.Group className="mb-3" >
              <Form.Label>Data da Doação</Form.Label>
              <Form.Control type="date" name="data" onChange={handleChangleData}
                value={dataAlimentos}
                isInvalid={!!errors.data}
                required />
              <Form.Control.Feedback type="invalid">
                {errors.data}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Item Doado</Form.Label>
              <Form.Control name="item" onChange={handleChangeItem} 
              value={itemAlimentos}
              isInvalid={!!errors.item}
              type="text" required />
              <Form.Control.Feedback type="invalid">
                {errors.item}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantidade</Form.Label>
              <Form.Control name="quantidade" onChange={handleChangeQuantidade} 
              value={quantidadeAlimentos}
              isInvalid={!!errors.quantidade}
              type="number" required />
              <Form.Control.Feedback type="invalid">
                {errors.quantidade}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control name="descricao" onChange={handleChangeDescricao} 
              value={descricaoAlimentos}
              isInvalid={!!errors.descricao}
              as="textarea" rows={2} required />
              <Form.Control.Feedback type="invalid">
                {errors.descricao}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Destinatário</Form.Label>
              <Form.Select name="destinatario" onChange={handleChangeDestinatario} 
              value={destinatarioAlimentos}
              isInvalid={!!errors.destinatario}
              required>
                <option value="">Selecione o Destinatário</option>
                <option >Instituição (Asilo Vicentino)</option>
                <option >João da Silva (Quarto 12)</option>
                <option >Maria Oliveira (Quarto 8)</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.destinatario}
              </Form.Control.Feedback>
            </Form.Group>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="mb-4">
          <Card.Body>
            <Card.Title className="mb-4"><h5>Informações do Doador</h5></Card.Title>
            <Form.Group className="mb-3">
              <Form.Label>Nome do Doador (Opcional)</Form.Label>
              <Form.Control name="doador" type="text" 
              onChange={handleChangeDoador}
              value={doadorAlimentos}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefone para Contato (Opcional)</Form.Label>
              <Form.Control name="telefone" 
              onChange={handleChangeTelefone}
              value={telefoneAlimentos}
              type="tel" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Evento Relacionado (Opcional)</Form.Label>
              <Form.Select 
              onChange={handleChangeEvento}
              value={eventoAlimentos}
              name="evento">
                <option value="">Nenhum evento relacionado</option>
                <option >Bazar Beneficente - Abril 2023</option>
                <option >Campanha do Agasalho 2023</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Observações (Opcional)</Form.Label>
              <Form.Control 
              onChange={handleChangeObservacoes}
              value={observacoesAlimentos}
              name="observacoes" as="textarea" rows={3} />
            </Form.Group>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <div className="d-flex justify-content-end gap-2">
      <Button variant="secondary" type="button" onClick={onCancel}>Cancelar</Button>
      <Button variant="primary" type="submit">Registrar Doação</Button>
    </div>
  </Form>
);
}

export default FormAlimentos;