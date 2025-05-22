import { Card, Button, Row, Col, Form, InputGroup, Table } from "react-bootstrap";
import { BsFunnel } from "react-icons/bs";
import { BiPencil, BiSearch, BiTrash } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './filtrobusca.css';

function FiltroBusca() {

    return (
            <Card className="mb-4">
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Filtros e Busca</h5>
                    <Button variant="outline-secondary" className="btn-sm" data-bs-toggle="collapse" data-bs-target="#filtersCollapse">
                        <BsFunnel size={15} className="me-1"></BsFunnel>Filtros
                    </Button>
                </Card.Header>
                <Card.Body className="collapse show" id="filtersCollapse">
                    <Row>
                        <Col md={3} className="mb-3">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Select>
                                <option value="">Todos</option>
                                <option value="money">Dinheiro</option>
                                <option value="food">Alimento</option>
                                <option value="others">Outros Itens</option>
                            </Form.Select>
                        </Col>
                        <Col md={3} className="mb-3">
                            <Form.Label>Período</Form.Label>
                            <Form.Select>
                                <option value="all">Todos</option>
                                <option value="today">Hoje</option>
                                <option value="week">Esta semana</option>
                                <option value="month">Este mês</option>
                                <option value="year">Este ano</option>
                                <option value="custom">Personalizado</option>
                            </Form.Select>
                        </Col>
                        <Col md={3} className="mb-3">
                            <Form.Label>Destinatário</Form.Label>
                            <Form.Select>
                                <option value="">Todos</option>
                                <option value="institution">Instituição</option>
                                <option value="elderly">Idosos específicos</option>
                            </Form.Select>
                        </Col>
                        <Col md={3} className="mb-3">
                            <Form.Label>Buscar</Form.Label>
                            <InputGroup>
                                <Form.Control type="text" placeholder="Doador, item ou evento..." />
                                <Button variant="outline-secondary" type="button">
                                    <BiSearch size={20}></BiSearch>
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
    );
}

export default FiltroBusca;