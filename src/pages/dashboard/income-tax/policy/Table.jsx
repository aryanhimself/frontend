import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEllipsisH,
  faEye,
  faPlus,
  // faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import {
  Col,
  Row,
  Form,
  Nav,
  Card,
  Button,
  Table,
  Dropdown,
  Pagination,
  InputGroup,
  ButtonGroup,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { authAxios } from "../../../../plugins/axios";

export default function IncomeTaxPolicyTable(props) {
  const [total, setTotal] = React.useState(0);
  const [policies, setPolicies] = React.useState([]);
  // const handleDelete = (id) => {
  //   authAxios.delete();
  // };

  const TableRow = (props) => {
    const { index, fiscal_year, created_at } = props;
    return (
      <tr>
        <td>{index}</td>
        <td>
          <Card.Link as={Link} to={"/"} className="fw-normal">
            {fiscal_year.label}
          </Card.Link>
        </td>
        <td>
          <span className="fw-normal">{fiscal_year.initiate_date}</span>
        </td>
        <td>
          <span className="fw-normal">{created_at.split("T")[0]}</span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle
              as={Button}
              split
              variant="link"
              className="text-dark m-0 p-0"
            >
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item href={`update/${props.id}`}>
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
              </Dropdown.Item>
              {/* <Dropdown.Item className="text-danger">
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="me-2"
                  onClick={() => handleDelete(parseInt(props.id))}
                />{" "}
                Remove
              </Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  const getIncomeTaxPolicies = React.useCallback(async () => {
    return await authAxios
      .get("/income-tax/policy/list")
      .then((res) => {
        return res.data;
      })
      .catch((_) => {
        return [];
      });
  }, []);

  const loadIncomeTaxPolicies = React.useCallback(async () => {
    const data = await getIncomeTaxPolicies();
    setPolicies(data.results);
    setTotal(data.total);
  }, [getIncomeTaxPolicies, setPolicies, setTotal]);

  React.useEffect(() => {
    loadIncomeTaxPolicies();
  }, [loadIncomeTaxPolicies]);

  return (
    <>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" />
            </InputGroup>
          </Col>

          <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
            <Button
              variant="primary"
              className="mb-3 w-100"
              href="/dashboard/income-tax/policy/register"
              style={{
                fontSize: "16px",
              }}
            >
              <FontAwesomeIcon icon={faPlus} /> New Policy
            </Button>
          </Col>
        </Row>
      </div>
      <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body className="pt-0">
          <Table hover className="income-tax-policies-table align-items-center">
            <thead>
              <tr>
                <th className="border-bottom">#</th>
                <th className="border-bottom">Fiscal Year</th>
                <th className="border-bottom">Initiate Date</th>
                <th className="border-bottom">Created At</th>
                <th className="border-bottom">Action</th>
              </tr>
            </thead>
            <tbody>
              {policies.map((t, index) => (
                <TableRow
                  key={`income-tax-${index}`}
                  {...t}
                  index={index + 1}
                  handleActionsClick={props.handleActionsClick}
                />
              ))}
            </tbody>
          </Table>
          <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
            <Nav>
              <Pagination className="mb-2 mb-lg-0">
                <Pagination.Prev>Previous</Pagination.Prev>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Next>Next</Pagination.Next>
              </Pagination>
            </Nav>
            <small className="fw-bold">
              Showing <b>{total}</b> out of <b>25</b> entries
            </small>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
}
