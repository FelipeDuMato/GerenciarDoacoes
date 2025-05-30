import { Card, Col, Row, Form, Button } from "react-bootstrap";
import { useState } from "react";

function FormOutros(onSave, onCancel) {
  
  // Estados
    const [doaOutros, setDoaOutros] = useState({
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
  const [dataOutros, setDataOutros] = useState("");
  const [itemOutros, setItemOutros] = useState("");
  const [quantidadeOutros, setQuantidadeOutros] = useState("");
  const [descricaoOutros, setDescricaoOutros] = useState("");
  const [destinatarioOutros, setDestinatarioOutros] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // Funções de manipulação de eventos
  const handleChangleData = (e) => {
    const value = e.target.value;
    setDataOutros(value);
    if (value && new Date(value) < new Date()) {
      setErrors((prev) => ({ ...prev, data: null }));
    } else {
      if (value === "") {
        setErrors((prev) => ({ ...prev, data: "A data deve ser preenchida" }));
        setValidated(false);
      } else if (new Date(value) > new Date()) {
        setErrors((prev) => ({ ...prev, data: "A data não pode ser maior do que hoje" }))
        setValidated(false);
      }
    }
  };

  const handleChangeItem = (e) => {
    const value = e.target.value.replace(/[0-9]/g, '');
    setItemOutros(value);
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
    setQuantidadeOutros(value);
    if (value && !isNaN(value) && value > 0) {
      setErrors((prev) => ({ ...prev, quantidade: null }));
    } else {
      if (value === "") {
        setErrors((prev) => ({ ...prev, quantidade: "A quantidade deve ser preenchida" }));
        setValidated(false);
      } else if (isNaN(value) || value <= 0) {
        setErrors((prev) => ({ ...prev, quantidade: "Quantidade inválida" }));
        setValidated(false);
      }
    }
  }

  const handleChangeDescricao = (e) => {
    const value = e.target.value.replace(/[0-9]/g, '');
    setDescricaoOutros(value);
    if (value && isNaN(value)) {
      setErrors((prev) => ({ ...prev, descricao: null }));
    } else {
      if (value === "") {
        setErrors((prev) => ({ ...prev, descricao: "A descrição deve ser preenchida" }));
        setValidated(false);
      } else if(!isNaN(value)) {
        setErrors((prev) => ({ ...prev, descricao: "A descrição deve ser um texto válido" }));
        setValidated(false);
      }
    }
  }

  const handleChangeDestinatario = (e) => {
    const value = e.target.value;
    setDestinatarioOutros(value);
    if (value && isNaN(value)) {
      setErrors((prev) => ({ ...prev, destinatario: null }));
    } else {
      if (value === "") {
        setErrors((prev) => ({ ...prev, destinatario: "O destinatário deve ser preenchido" }));
        setValidated(false);
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    let newErrors = {};
    if (!form.checkValidity()) {
      e.stopPropagation();
      setValidated(true);
    }
    if (dataOutros === "") {
      newErrors.data = "A data deve ser preenchida";
    } else if (new Date(dataOutros) > new Date()) {
      newErrors.data = "A data não pode ser maior do que hoje";
    }
    if (itemOutros === "") {
      newErrors.item = "O item doado deve ser preenchido";
    } else if (!isNaN(itemOutros)) {
      newErrors.item = "O item doado deve ser um texto válido";
    }
    if (quantidadeOutros === "") {
      newErrors.quantidade = "A quantidade deve ser preenchida";
    } else if (isNaN(quantidadeOutros) || quantidadeOutros <= 0) {
      newErrors.quantidade = "Quantidade inválida";
    }
    if (descricaoOutros === "") {
      newErrors.descricao = "A descrição deve ser preenchida";
    } else if (!isNaN(descricaoOutros)) {
      newErrors.descricao = "A descrição deve ser um texto válido";
    }
    if (destinatarioOutros === "") {
      newErrors.destinatario = "O destinatário deve ser preenchido";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setValidated(false);
    } else {
      setErrors({});
      setValidated(true);
      setShowAlert(true);
    }
  }

    return(
            // Formulário comum
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="mb-4"><h5>Informações da Doação</h5></Card.Title>
              <Form.Group className="mb-3" >
                <Form.Label>Data da Doação</Form.Label>
                <Form.Control type="date" name="data" onChange={handleChangleData} 
                value={dataOutros}
                isInvalid={!!errors.data}
                required />
                <Form.Control.Feedback type="invalid">
                  {errors.data}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Item Doado</Form.Label>
                <Form.Control name="item" onChange={handleChangeItem} 
                value={itemOutros}
                isInvalid={!!errors.item}
                type="text" required />
                <Form.Control.Feedback type="invalid">
                  {errors.item}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Quantidade</Form.Label>
                <Form.Control name="quantidade" onChange={handleChangeQuantidade} 
                value={quantidadeOutros}
                isInvalid={!!errors.quantidade}
                type="number" required />
                <Form.Control.Feedback type="invalid">
                  {errors.quantidade}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descrição</Form.Label>
                <Form.Control name="descricao" onChange={handleChangeDescricao} 
                value={descricaoOutros}
                isInvalid={!!errors.descricao}
                as="textarea" rows={2} required />
                <Form.Control.Feedback type="invalid">
                  {errors.descricao}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Destinatário</Form.Label>
                <Form.Select name="destinatario" onChange={handleChangeDestinatario} 
                value={destinatarioOutros}
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
                <Form.Control name="doador" type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Telefone para Contato (Opcional)</Form.Label>
                <Form.Control name="telefone" type="tel" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Evento Relacionado (Opcional)</Form.Label>
                <Form.Select name="evento">
                  <option value="">Nenhum evento relacionado</option>
                  <option >Bazar Beneficente - Abril 2023</option>
                  <option >Campanha do Agasalho 2023</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Observações (Opcional)</Form.Label>
                <Form.Control name="observacoes" as="textarea" rows={3} />
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

export default FormOutros;