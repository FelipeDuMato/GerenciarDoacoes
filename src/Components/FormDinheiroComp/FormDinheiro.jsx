import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

function FormDinheiro({ onSave, onCancel }) {

    const [doaDinheiro, setDoaDinheiro] = useState({
        data: "",
        valor: "",
        destinatario: "",
        doador: "",
        telefone: "",
        evento: "",
        observacoes: ""
    });

    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoaDinheiro((prevState) => ({
            ...prevState,
            [name]: name === "valor" ? parseFloat(value) : value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (!form.checkValidity()) {
            e.stopPropagation();
            setValidated(true);
            return;
        }
        onSave(doaDinheiro);
        setDoaDinheiro({
            data: "",
            valor: "",
            destinatario: "",
            doador: "",
            telefone: "",
            evento: "",
            observacoes: ""
        });
        setValidated(false);
    }

    return (
        // Formulário comum
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title className="mb-4"><h5>Informações da Doação</h5></Card.Title>
                            <Form.Group className="mb-3" >
                                <Form.Label>Data da Doação</Form.Label>
                                <Form.Control type="date" name="data" onChange={handleChange} required />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, insira uma data.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Valor da Doação</Form.Label>
                                <Form.Control type="number" step={0.01} placeholder="R$ 0,00" name="valor" onChange={handleChange} required />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, insira um valor em dinheiro.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Destinatário</Form.Label>
                                <Form.Select required name="destinatario" onChange={handleChange}>
                                    <option value="">Selecione o Destinatário</option>
                                    <option >Instituição (Asilo Vicentino)</option>
                                    <option >João da Silva (Quarto 12)</option>
                                    <option >Maria Oliveira (Quarto 8)</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    Por favor, selecione um destinatário.
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
                                <Form.Control name="doador" onChange={handleChange} type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Telefone para Contato (Opcional)</Form.Label>
                                <Form.Control name="telefone" onChange={handleChange} type="tel" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Evento Relacionado (Opcional)</Form.Label>
                                <Form.Select name="evento" onChange={handleChange}>
                                    <option value="">Nenhum evento relacionado</option>
                                    <option >Bazar Beneficente - Abril 2023</option>
                                    <option >Campanha do Agasalho 2023</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Observações (Opcional)</Form.Label>
                                <Form.Control name="observacoes" onChange={handleChange} as="textarea" rows={3} />
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

export default FormDinheiro;