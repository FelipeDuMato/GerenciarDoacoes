import { Button, Card, Col, Form, Row, Alert } from "react-bootstrap";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { data } from "react-router-dom";

function FormDinheiro({ onSave, onCancel }) {
    // Estados
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
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [dataDinheiro, setDataDinheiro] = useState("");
    const [valorDinheiro, setValorDinheiro] = useState("");
    const [destinatario, setDestinatario] = useState("");
    const [doador, setDoador] = useState("");
    const [telefone, setTelefone] = useState("");
    const [evento, setEvento] = useState("");
    const [observacoes, setObservacoes] = useState("");
    // -----
    // Funções de manipulação de eventos

    const handleChangeData = (e) => {
        const value = e.target.value;
        setDataDinheiro(value);
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

    const handleChangeValor = (e) => {
        const value = e.target.value.replace(/[a-zA-Z]/g, '');
        setValorDinheiro(value);
        if (value && !isNaN(value) && parseFloat(value) >= 0) {
            setErrors((prev) => ({ ...prev, valor: null }));
        } else {
            if (value === "") {
                setErrors((prev) => ({ ...prev, valor: "O valor deve ser preenchido" }));
                setValidated(false);
            } else {
                setErrors((prev) => ({ ...prev, valor: "Valor inválido" }));
                setValidated(false);
            }
        }
    }

    const handleChamgeDestinatario = (e) => {
        const value = e.target.value;
        setDestinatario(value);
        if (value) {
            setErrors((prev) => ({ ...prev, destinatario: null }));
        } else {
            if (value === "") {
                setErrors((prev) => ({ ...prev, destinatario: "Por favor, selecione um destinatário" }));
                setValidated(false);
            } else {
                setErrors((prev) => ({ ...prev, destinatario: null }));
            }
        }
    }

    const handleChangeDoador = (e) => {
        const value = e.target.value.replace(/[0-9]/g, '');
        setDoador(value);
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
        setTelefone(formatado); // Atualiza o estado com o valor formatado
    }       

    const handleChangeObservacoes = (e) => {
        const value = e.target.value.replace(/[0-9]/g, '');
        setObservacoes(value);
    }

    const handleChangeEvento = (e) => {
        const value = e.target.value;
        setEvento(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        let newErrors = {};

        if (!form.checkValidity()) {
            e.stopPropagation();
        }
        if (!dataDinheiro) {
            newErrors.data = "A data deve ser preenchida"
            setValidated(false);
        } else if (new Date(dataDinheiro) > new Date()) {
            newErrors.data = "A data não pode ser maior do que hoje";
            setValidated(false);
        }

        if (!valorDinheiro) {
            newErrors.valor = "O valor deve ser preenchido";
            setValidated(false);
        } else if (parseFloat(valorDinheiro) < 0) {
            newErrors.valor = "Valor inválido";
            setValidated(false);
        }
        if (!destinatario) {
            newErrors.destinatario = "Por favor, selecione um destinatário";
            setValidated(false);
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setValidated(true);
            setShowAlert(true);
        }
    }
    // -----
    return (
        // Formulário comum
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Alert variant="success" show={showAlert}> <b> <FaCheckCircle></FaCheckCircle> </b> Doação cadastrada com sucesso! </Alert>
            <Row>
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title className="mb-4"><h5>Informações da Doação</h5></Card.Title>
                            <Form.Group className="mb-3" controlId="data">
                                <Form.Label>Data da Doação</Form.Label>
                                <Form.Control type="date" name="data" onChange={handleChangeData}
                                    required
                                    value={dataDinheiro}
                                    isInvalid={!!errors.data}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.data}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="valor">
                                <Form.Label>Valor da Doação</Form.Label>
                                <Form.Control type="number" step={0.01} placeholder="R$ 0,00" name="valor" required
                                    onChange={handleChangeValor}
                                    value={valorDinheiro}
                                    isInvalid={!!errors.valor}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.valor}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="destinatario">
                                <Form.Label>Destinatário</Form.Label>
                                <Form.Select required name="destinatario" onChange={handleChamgeDestinatario}
                                    value={destinatario}
                                    isInvalid={!!errors.destinatario}>
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
                            <Form.Group className="mb-3" controlId="doador">
                                <Form.Label>Nome do Doador (Opcional)</Form.Label>
                                <Form.Control onChange={handleChangeDoador}
                                    value={doador}
                                    name="doador" type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="telefone">
                                <Form.Label>Telefone para Contato (Opcional)</Form.Label>
                                <Form.Control
                                    onChange={handleChangeTelefone}
                                    value={telefone}
                                    name="telefone" type="tel" 
                                    maxLength={15}
                                    />
                            </Form.Group>
                            <Form.Group className="mb-3" 
                            onChange={handleChangeEvento}
                            value={evento}
                            controlId="evento">
                                <Form.Label>Evento Relacionado (Opcional)</Form.Label>
                                <Form.Select name="evento">
                                    <option value="">Nenhum evento relacionado</option>
                                    <option >Bazar Beneficente - Abril 2023</option>
                                    <option >Campanha do Agasalho 2023</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="observacoes">
                                <Form.Label>Observações (Opcional)</Form.Label>
                                <Form.Control name="observacoes" 
                                onChange={handleChangeObservacoes}
                                value={observacoes}
                                as="textarea" rows={3} />
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