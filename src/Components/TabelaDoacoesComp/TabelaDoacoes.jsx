import { Card, Table, Button, Form } from 'react-bootstrap';
import { BiPencil, BiTrash } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import './tabeladoacoes.css';

function TabelaDoacoes () {
    return (
        <Card>
                <Card.Body>
                    <div className="table-responsive">
                            <Form.Group className="mb-2 d-flex" style={{ width: '25%' }}>
                                <Form.Label className="me-2">
                                    Pesquisar
                                </Form.Label>
                                <Form.Control type="search" className="form-control-sm" placeholder="Buscar Registros" aria-controls="donationsTable"/>
                                </Form.Group>
                        
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Doador</th>
                                    <th>Tipo</th>
                                    <th>Descrição</th>
                                    <th>Valor/Quantidade</th>
                                    <th>Destinatário</th>
                                    <th>Evento</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>15/04/2023</td>
                                    <td>João Silva</td>
                                    <td><span className="donation-money">Dinheiro</span></td>
                                    <td>Doação em dinheiro</td>
                                    <td>R$ 500,00</td>
                                    <td>Instituição</td>
                                    <td><span className="badge badge-event">Campanha Abril</span></td>
                                    <td className="action-btns">
                                        <Button as="a" variant="outline-primary" className="btn-sm" href="" title="Editar">
                                            <BiPencil size={20}></BiPencil>
                                        </Button>
                                        <Button as="a" variant="outline-danger" className="btn-sm" href="" title="Excluir">
                                            <BiTrash size={20}></BiTrash>
                                        </Button>
                                        <Button as="a" variant="outline-secondary" className="btn-sm" href="" title="Detalhes">
                                            <AiOutlineEye size={20}></AiOutlineEye>
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>10/04/2023</td>
                                    <td>Supermercado ABC</td>
                                    <td><span className="donation-food">Alimentos</span></td>
                                    <td>Cestas básicas</td>
                                    <td>10 unidades</td>
                                    <td>Instituição</td>
                                    <td><span className="badge badge-event">-</span></td>
                                    <td className="action-btns">
                                        <Button as="a" variant="outline-primary" className="btn-sm" href="" title="Editar">
                                            <BiPencil size={20}></BiPencil>
                                        </Button>
                                        <Button as="a" variant="outline-danger" className="btn-sm" href="" title="Excluir">
                                            <BiTrash size={20}></BiTrash>
                                        </Button>
                                        <Button as="a" variant="outline-secondary" className="btn-sm" href="" title="Detalhes">
                                            <AiOutlineEye size={20}></AiOutlineEye>
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>05/04/2023</td>
                                    <td>Maria Oliveira</td>
                                    <td><span className="donation-item">Outros Itens</span></td>
                                    <td>Roupas e cobertores</td>
                                    <td>3 caixas</td>
                                    <td>João da Silva (Quarto 12)</td>
                                    <td><span className="badge badge-event">Campanha do Agasalho</span></td>
                                    <td className="action-btns">
                                        <Button as="a" variant="outline-primary" className="btn-sm" href="" title="Editar">
                                            <BiPencil size={20}></BiPencil>
                                        </Button>
                                        <Button as="a" variant="outline-danger" className="btn-sm" href="" title="Excluir">
                                            <BiTrash size={20}></BiTrash>
                                        </Button>
                                        <Button as="a" variant="outline-secondary" className="btn-sm" href="" title="Detalhes">
                                            <AiOutlineEye size={20}></AiOutlineEye>
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01/04/2023</td>
                                    <td>Empresa XYZ</td>
                                    <td><span className="donation-money">Dinheiro</span></td>
                                    <td>Patrocínio mensal</td>
                                    <td>R$ 1.200,00</td>
                                    <td>Instituição</td>
                                    <td><span className="badge badge-event">-</span></td>
                                    <td className="action-btns">
                                        <Button as="a" variant="outline-primary" className="btn-sm" href="" title="Editar">
                                            <BiPencil size={20}></BiPencil>
                                        </Button>
                                        <Button as="a" variant="outline-danger" className="btn-sm" href="" title="Excluir">
                                            <BiTrash size={20}></BiTrash>
                                        </Button>
                                        <Button as="a" variant="outline-secondary" className="btn-sm" href="" title="Detalhes">
                                            <AiOutlineEye size={20}></AiOutlineEye>
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>28/03/2023</td>
                                    <td>Padaria Pão Quente</td>
                                    <td><span className="donation-food">Alimentos</span></td>
                                    <td>Pães e bolos</td>
                                    <td>5 caixas</td>
                                    <td>Instituição</td>
                                    <td><span className="badge badge-event">Páscoa Solidária</span></td>
                                    <td className="action-btns">
                                        <Button as="a" variant="outline-primary" className="btn-sm" href="" title="Editar">
                                            <BiPencil size={20}></BiPencil>
                                        </Button>
                                        <Button as="a" variant="outline-danger" className="btn-sm" href="" title="Excluir">
                                            <BiTrash size={20}></BiTrash>
                                        </Button>
                                        <Button as="a" variant="outline-secondary" className="btn-sm" href="" title="Detalhes">
                                            <AiOutlineEye size={20}></AiOutlineEye>
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Card.Body>
            </Card>
    );
}

export default TabelaDoacoes;