/* eslint-disable jsx-a11y/control-has-associated-label */
import { useRef, useState } from 'react';
import {
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
  Dropdown,
  Navbar,
  NavDropdown,
  ButtonToolbar,
  Container,
  Nav,
  Tabs,
  Tab,
  Table,
  InputGroup,
  Breadcrumb,
  Pagination,
  Alert,
  Badge,
  ProgressBar,
  ListGroup,
  Card,
  Modal,
  Popover,
  OverlayTrigger,
  Overlay,
  Tooltip,
  SplitButton,
} from 'react-bootstrap';

const UiKit = () => {
  const [show, setShow] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const target = useRef(null);
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And heres some
        {' '}
        <strong>amazing</strong>
        content. Its very engaging.
        right?
      </Popover.Body>
    </Popover>
  );

  return (
    <Container fluid>

      <>
        <Row>
          <Col sm={12}>
            <h1>Bootstrap components</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h3>Cards</h3>
            <div className="my-16 p-8 bg-gray">
              <Row>
                <Col sm={6}>
                  <Card bg="secondary" className="border-0">
                    <div className="m-64" />
                  </Card>
                </Col>
                <Col sm={6}>
                  <Card bg="primary" className="border-0">
                    <div className="m-64" />
                  </Card>
                </Col>
              </Row>
            </div>
            <h3>DropDowns</h3>
            <div className="my-16">
              <ButtonGroup role="group" aria-label="Button group with nested dropdown">
                <ButtonGroup role="group">
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" className="rounded">
                      Click me
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="p-8">
                      <Dropdown.Item href="#/action-1" className="rounded">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2" className="rounded">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" className="rounded">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
              </ButtonGroup>
            </div>
            <h3>Fields/Checkboxes</h3>
            <div className="my-16">
              <Form>
                <Form.Group className="form-group">
                  <Form.Label htmlFor="exampleInputEmail1">Email address</Form.Label>
                  <Form.Control type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label htmlFor="exampleInputPassword1">Password</Form.Label>
                  <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </Form.Group>
                <Form.Group className="form-group mt-8">
                  <Form.Check
                    type="checkbox"
                    id={`default-${'checkbox'}`}
                    label={`default ${'checkbox'}`}
                  />
                </Form.Group>
              </Form>
            </div>
            <h3>Buttons/Links</h3>
            <div className="my-16">
              <h5>Normal</h5>
              <Button variant="primary" type="button" className="btn-lg">Large button</Button>
              <Button variant="primary" type="button">Default button</Button>
              <Button variant="primary" type="button" className="btn-sm">Small button</Button>
              <Button variant="outline-primary" size="lg" type="button">Large button</Button>
              <Button variant="outline-primary" type="button">Default button</Button>
              <Button variant="outline-primary" type="button" size="sm">Small button</Button>
              <h5 className="mt-8">Disabled</h5>
              <Button variant="primary" type="button" className="btn-lg" disabled>Large button</Button>
              <Button variant="primary" type="button" disabled>Default button</Button>
              <Button variant="primary" type="button" className="btn-sm" disabled>Small button</Button>
              <Button variant="outline-primary" size="lg" type="button" disabled>Large button</Button>
              <Button variant="outline-primary" type="button" disabled>Default button</Button>
              <Button variant="outline-primary" type="button" size="sm" disabled>Small button</Button>
              <h5 className="mt-8">Links</h5>
              <Nav.Link className="text-primary text-decoration-underline">Normal Link</Nav.Link>
              <Nav.Link className="text-primary text-decoration-underline fw-700">Normal Link</Nav.Link>
            </div>
            {/* //here */}
            <h3>Alert/Errors/Loading</h3>
            <div className="my-16">
              <Button variant="primary" type="button" size="lg">Alert</Button>
              <Button variant="primary" type="button" size="lg">notification</Button>
              <Button variant="primary" type="button" size="lg">Success</Button>
            </div>
            <h3>List Group</h3>
            <div className="my-16">
              <p>todo</p>
            </div>
          </Col>
        </Row>
      </>

      {/* Colors */}
      <>
        <Row>
          <Col sm={12}>
            <hr />
            <h1 id="typography">Colors</h1>
          </Col>
        </Row>
        <Row className="my-32">
          <Col sm={2}>
            <h5 className='bg-primary'>primary!!!</h5>
          </Col>
          <Col sm={2}>
            <h5>primary-hover</h5>
            <Badge bg="primary-hover" className="w-100 h-100"><div /></Badge>
          </Col>
          <Col sm={2}>
            <h5>primary-active</h5>
            <Badge bg="primary-active" className="w-100 h-100"><div /></Badge>
          </Col>
          <Col sm={2}>
            <h5>primary-100</h5>
            <Badge bg="primary-100" className="w-100 h-100"><div /></Badge>
          </Col>
        </Row>
        <Row className="my-32">
          <Col sm={2}>
            <h5 className="bg-secondary">secondary</h5>
          </Col>
          <Col sm={2}>
            <h5>secondary-900</h5>
            <Badge bg="secondary-900" className="w-100 h-100"><div /></Badge>
          </Col>
          <Col sm={2}>
            <h5>secondary-500</h5>
            <Badge bg="secondary-500" className="w-100 h-100"><div /></Badge>
          </Col>
          <Col sm={2}>
            <h5>secondary-300</h5>
            <Badge bg="secondary-300" className="w-100 h-100"><div /></Badge>
          </Col>
          <Col sm={2}>
            <h5>secondary-200</h5>
            <Badge bg="secondary-200" className="w-100 h-100"><div /></Badge>
          </Col>
        </Row>
        <Row className="my-32">
          <Col sm={2}>
            <h5 className='bg-info'>info</h5>
          </Col>
          <Col sm={2}>
            <h5>info-active</h5>
            <Badge bg="info-active" className="w-100 h-100"><div /></Badge>
          </Col>
          <Col sm={2}>
            <h5>info-hover</h5>
            <Badge bg="info-hover" className="w-100 h-100"><div /></Badge>
          </Col>
        </Row>
        <Row className="my-32">
          <Col sm={2}>
            <h5 className='bg-danger'>danger</h5>
          </Col>
          <Col sm={2}>
            <h5>danger-active</h5>
            <Badge bg="danger-active" className="w-100 h-100"><div /></Badge>
          </Col>
          <Col sm={2}>
            <h5>danger-hover</h5>
            <Badge bg="danger-hover" className="w-100 h-100"><div /></Badge>
          </Col>
        </Row>
        <Row className="my-32">
          <Col sm={2}>
            <h5 className='bg-warning'>warning</h5>
          </Col>
          <Col sm={2}>
            <h5>warning-active</h5>
            <Badge bg="warning-active" className="w-100 h-100"><div /></Badge>
          </Col>
          <Col sm={2}>
            <h5>warning-hover</h5>
            <Badge bg="warning-hover" className="w-100 h-100"><div /></Badge>
          </Col>
        </Row>
        <Row className="my-32">
          <Col sm={2}>
            <h5 className='bg-success'>success</h5>
          </Col>
          <Col sm={2}>
            <h5>success-active</h5>
            <Badge bg="success-active" className="w-100 h-100"><div /></Badge>
          </Col>
          <Col sm={2}>
            <h5>success-hover</h5>
            <Badge bg="success-hover" className="w-100 h-100"><div /></Badge>
          </Col>
        </Row>
        <Row className="my-32">
          <Col sm={2}>
            <h5 className='bg-dark'>dark</h5>
          </Col>
          <Col sm={2}>
            <h5>dark-900</h5>
            <Badge bg="dark-900" className="w-100 h-100"><div /></Badge>
          </Col>
          <Col sm={2}>
            <h5>dark-500</h5>
            <Badge bg="dark-500" className="w-100 h-100"><div /></Badge>
          </Col>
        </Row>
        <Row className="mt-32 mb-64">
          <Col sm={2}>
            <h5 className='bg-gray'>gray</h5>
          </Col>
          <Col sm={2}>
            <h5>gray-300</h5>
            <Badge bg="gray-300" className="w-100 h-100"><div /></Badge>
          </Col>
          <Col sm={2}>
            <h5>gray-200</h5>
            <Badge bg="gray-200" className="w-100 h-100"><div /></Badge>
          </Col>
          <Col sm={2}>
            <h5>gray-100</h5>
            <Badge bg="gray-100" className="w-100 h-100"><div /></Badge>
          </Col>
        </Row>
      </>

      {/* Typography */}
      <>
        <Row>
          <Col sm={12}>
            <hr />
            <h1 id="typography">Typography</h1>
          </Col>
        </Row>

        {/* Headings */}
        <Row>
          <Col sm={4}>
            <h1>h1</h1>
            <h1 className="fw-700">h1 className=fw-700</h1>
          </Col>
          <Col sm={2}>
            <h2>h2</h2>
            <h2 className="fw-700">h2 className=fw-700</h2>
          </Col>
          <Col sm={2}>
            <h3>h3</h3>
            <h3 className="fw-700">h3 className=fw-700</h3>
          </Col>
          <Col sm={2}>
            <h4>h4</h4>
            <h4 className="fw-400">h4 className=fw-400</h4>
            <h4 className="fw-800">h4 className=fw-800</h4>
          </Col>
          <Col sm={2}>
            <h5>h5</h5>
            <h5 className="fw-700">h5 className=fw-700</h5>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <p className="lead fw-400">
              p className=lead fw-400
            </p>
            <p className="lead">
              p className=lead
            </p>
            <p className="lead fw-800">
              p className=lead fw-800
            </p>
          </Col>
          <Col sm={3}>
            <p className="base fw-800">
              p className=base fw-800
            </p>
            <p className="base">
              p className=base
            </p>
            <p className="base fw-700">
              p className=base fw-700
            </p>
          </Col>
          <Col sm={3}>
            <p className="small fw-400">
              p className=small fw-400
            </p>
            <p className="small">
              p className=small
            </p>
            <p className="small fw-800">
              p className=small fw-800
            </p>
            <p className="small fw-900">
              p className=small fw-900
            </p>
          </Col>
          <Col sm={3}>
            <p className="xsmall">
              p className=xsmall
            </p>
            <p className="xsmall fw-900">
              p className=xsmall fw-900
            </p>
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <h3>
              Heading
              <small className="text-muted">with muted text</small>
            </h3>
            <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          </Col>
          <Col sm={4}>
            <h2>Example body text</h2>
            <p>
              Nullam quis risus eget

              <a href="/">urna mollis ornare</a>

              vel eu leo. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.

            </p>
            <p><small>This line of text is meant to be treated as fine print.</small></p>
            <p>
              The following is

              <strong>rendered as bold text</strong>
              .
            </p>
            <p>
              The following is

              <em>rendered as italicized text</em>
              .
            </p>
            <p>
              An abbreviation of the word attribute is

              <abbr title="attribute">attr</abbr>
              .
            </p>
          </Col>
          <Col sm={4}>
            <h2>Emphasis classes</h2>
            <p className="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
            <p className="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            <p className="text-secondary">Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
            <p className="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
            <p className="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p className="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            <p className="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
          </Col>
        </Row>
      </>

      {/* Buttons */}
      <>
        <Row>
          <hr />
          <Col sm={12}>
            <h1 id="buttons">Buttons</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <h5 className="mt-16">Normal Buttons</h5>
            <Button variant="primary" type="button">Primary</Button>
            <Button variant="secondary" type="button">Secondary</Button>
            <Button variant="success" type="button">Success</Button>
            <Button variant="info" type="button">Info</Button>
            <Button variant="warning" type="button">Warning</Button>
            <Button variant="danger" type="button">Danger</Button>

            <h5 className="mt-16">Disbaled Buttons</h5>
            <Button variant="primary" type="button" disabled>Primary</Button>
            <Button variant="secondary" type="button" disabled>Secondary</Button>
            <Button variant="success" type="button" disabled>Success</Button>
            <Button variant="info" type="button" disabled>Info</Button>
            <Button variant="warning" type="button" disabled>Warning</Button>
            <Button variant="danger" type="button" disabled>Danger</Button>

            <h5 className="mt-16">Normal Border Buttons</h5>
            <Button variant="outline-primary" type="button">Primary</Button>
            <Button variant="outline-secondary" type="button">Secondary</Button>
            <Button variant="outline-success" type="button">Success</Button>
            <Button variant="outline-info" type="button">Info</Button>
            <Button variant="outline-warning" type="button">Warning</Button>
            <Button variant="outline-danger" type="button">Danger</Button>

            <h5 className="mt-16">Disbaled Border Buttons</h5>
            <Button variant="outline-primary" type="button" disabled>Primary</Button>
            <Button variant="outline-secondary" type="button" disabled>Secondary</Button>
            <Button variant="outline-success" type="button" disabled>Success</Button>
            <Button variant="outline-info" type="button" disabled>Info</Button>
            <Button variant="outline-warning" type="button" disabled>Warning</Button>
            <Button variant="outline-danger" type="button" disabled>Danger</Button>

            <h5 className="mt-16">Button Dropdown</h5>
            <ButtonGroup role="group" aria-label="Button group with nested dropdown">
              <ButtonGroup role="group">
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Primary Dropdown
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonGroup>
            </ButtonGroup>

            <ButtonGroup role="group" aria-label="Button group with nested dropdown">
              <ButtonGroup role="group">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Success Dropdown
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonGroup>
            </ButtonGroup>

            <ButtonGroup role="group" aria-label="Button group with nested dropdown">
              <ButtonGroup role="group">
                <Dropdown>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Info Dropdown
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonGroup>
            </ButtonGroup>

            <ButtonGroup role="group" aria-label="Button group with nested dropdown">
              <ButtonGroup role="group">
                <Dropdown>
                  <Dropdown.Toggle variant="danger" id="dropdown-basic">
                    Danger Dropdown
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonGroup>
            </ButtonGroup>

            <h5 className="mt-16">Button Sizes</h5>
            <Button type="button" className="bg-primary border-primary btn-lg">Large button</Button>
            <Button type="button" className="bg-primary border-primary">Default button</Button>
            <Button type="button" className="bg-primary border-primary btn-sm">Small button</Button>

          </Col>
          <Col sm={4}>
            <h5 className="mt-16">Button With Forms</h5>
            <Form className="bs-component mb-8">
              <ButtonGroup className="btn-group-toggle" data-toggle="buttons">
                <Form.Label className="btn btn-primary active">
                  <Form.Control className="form-check-input" type="checkbox" value="" checked="" />

                  Active
                </Form.Label>
                <Form.Label className="btn btn-primary">
                  <Form.Control className="form-check-input" type="checkbox" value="" checked="" />

                  Check
                </Form.Label>
                <Form.Label className="btn btn-primary">
                  <Form.Control className="form-check-input" type="checkbox" value="" checked="" />

                  Check
                </Form.Label>
              </ButtonGroup>
            </Form>

            <h5 className="mt-16">Button With Group</h5>
            <ButtonGroup role="group" aria-label="Basic example" className="mb-8">
              <Button type="button" className="bg-primary border-primary">Left</Button>
              <Button type="button" className="bg-secondary border-secondary">Middle</Button>
              <Button type="button" className="bg-info border-info">Right</Button>
            </ButtonGroup>

            <h5 className="mt-16">Button With Toolbar</h5>
            <ButtonToolbar role="toolbar" aria-label="Toolbar with button groups" className="mb-8">
              <ButtonGroup className="me-16" role="group" aria-label="First group">
                <Button type="button" className="bg-primary border-primary">1</Button>
                <Button type="button" className="bg-primary border-primary">2</Button>
                <Button type="button" className="bg-primary border-primary">3</Button>
                <Button type="button" className="bg-primary border-primary">4</Button>
              </ButtonGroup>
              <ButtonGroup className="me-16" role="group" aria-label="Second group">
                <Button type="button" className="bg-primary border-primary">5</Button>
                <Button type="button" className="bg-primary border-primary">6</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
      </>

      {/* NavBars */}
      <>
        <Row className="mt-16">
          <hr />
          <Col sm={12}>
            <h1>Navbars</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Navbar bg="primary" expand="lg">
              <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-16 my-lg-0 h-100"
                    navbarScroll
                  >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                      Link
                    </Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-16"
                      aria-label="Search"
                    />
                    <Button variant="primary">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <Navbar bg="secondary" expand="lg" className="mt-16">
              <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-16 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                      Link
                    </Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-16"
                      aria-label="Search"
                    />
                    <Button variant="secondary">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <Navbar bg="info" expand="lg" className="mt-16">
              <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-16 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                      Link
                    </Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-16"
                      aria-label="Search"
                    />
                    <Button variant="info">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </>

      {/* Blockquotes */}
      <>
        <Row className="mt-16">
          <hr />
          <Col sm={12}>
            <h1>Blockquotes</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <blockquote className="blockquote">
              <p className="mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer">
                Someone famous in

                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Col>
          <Col sm={4}>
            <blockquote className="blockquote text-center">
              <p className="mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer">
                Someone famous in

                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Col>
          <Col sm={4}>
            <blockquote className="blockquote text-right">
              <p className="mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer">
                Someone famous in

                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Col>
        </Row>
      </>

      {/* Tables */}
      <>
        <Row className="mt-16">
          <hr />
          <Col sm={12}>
            <h1>Tables</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Table striped bordered hover className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Column heading</th>
                  <th scope="col">Column heading</th>
                  <th scope="col">Column heading</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-active">
                  <th scope="row">Active</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr>
                  <th scope="row">Default</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="table-primary">
                  <th scope="row">Primary</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="table-secondary">
                  <th scope="row">Secondary</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="table-success">
                  <th scope="row">Success</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="table-danger">
                  <th scope="row">Danger</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="table-warning">
                  <th scope="row">Warning</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="table-info">
                  <th scope="row">Info</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="table-light">
                  <th scope="row">Light</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="table-dark">
                  <th scope="row">Dark</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </>

      {/* Forms */}
      <>
        <Row className="mt-16">
          <hr />
          <Col sm={12}>
            <h1>Forms</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <div className="bs-component">
              <Form>
                <Form.Group>
                  <legend>Legend</legend>
                  <Form.Group className="form-group row">
                    <Form.Label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" readonly="" className="form-control-plaintext" id="staticEmail" value="email@example.com" />
                    </Col>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="exampleInputEmail1">Email address</Form.Label>
                    <Form.Control type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We`&apos;`ll never share your email with anyone else.</small>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="exampleInputPassword1">Password</Form.Label>
                    <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="exampleSelect1">Example select</Form.Label>
                    <Form.Select className="form-control" id="exampleSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="exampleSelect2">Example multiple select</Form.Label>
                    <Form.Select multiple="" className="form-control" id="exampleSelect2">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="exampleTextarea">Example textarea</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                    />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="exampleInputFile">File input</Form.Label>
                    <Form.Control type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                    <small id="fileHelp" className="form-text text-muted">
                      This is some placeholder block-level help text for
                      the above input. It`&apos;`s a bit lighter and easily wraps to a new line.

                    </small>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <legend>Checkboxes</legend>
                    <Form.Check
                      type="checkbox"
                      id={`default-${'checkbox'}`}
                      label={`default ${'checkbox'}`}
                    />

                    <Form.Check
                      disabled
                      type="radio"
                      label={`disabled ${'radio'}`}
                      id={`disabled-default-${'radio'}`}
                    />
                    <Form.Check
                      type="radio"
                      id={`default-${'radio'}`}
                      label={`default ${'radio'}`}
                    />

                    <Form.Check
                      disabled
                      type="radio"
                      label={`disabled ${'radio'}`}
                      id={`disabled-default-${'radio'}`}
                    />
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Check this switch"
                      />
                      <Form.Check
                        disabled
                        type="switch"
                        label="disabled switch"
                        id="disabled-custom-switch"
                      />
                      <Form.Check aria-label="option 1" />
                      <Form.Check type="radio" aria-label="radio 1" />
                    </Form>
                  </Form.Group>
                  <Button type="submit" className="btn btn-primary">Submit</Button>
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col sm={4} lg={{ offset: 1 }}>

            <Form className="bs-component">
              <Form.Group className="form-group">
                <fieldset disabled>
                  <Form.Label className="control-label" htmlFor="disabledInput">Disabled input</Form.Label>
                  <Form.Control className="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled="" />
                </fieldset>
              </Form.Group>

              <Form.Group className="form-group">
                <fieldset>
                  <Form.Label className="control-label" htmlFor="readOnlyInput">Readonly input</Form.Label>
                  <Form.Control className="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here…" readonly="" />
                </fieldset>
              </Form.Group>

              <Form.Group className="form-group has-success">
                <Form.Label className="form-control-label" htmlFor="inputSuccess1">Valid input</Form.Label>
                <Form.Control type="text" value="correct value" className="form-control is-valid" id="inputValid" />
                <div className="valid-feedback">Success! You`&apos;`ve done it.</div>
              </Form.Group>

              <Form.Group className="form-group has-danger">
                <Form.Label className="form-control-label" htmlFor="inputDanger1">Invalid input</Form.Label>
                <Form.Control type="text" value="wrong value" className="form-control is-invalid" id="inputInvalid" />
                <div className="invalid-feedback">Sorry, that username`&apos;`s taken. Try another?</div>
              </Form.Group>

              <Form.Group className="form-group">
                <Form.Label className="col-form-label col-form-label-lg" htmlFor="inputLarge">Large input</Form.Label>
                <Form.Control className="form-control form-control-lg" type="text" placeholder=".form-control-lg" id="inputLarge" />
              </Form.Group>

              <Form.Group className="form-group">
                <Form.Label className="col-form-label" htmlFor="inputDefault">Default input</Form.Label>
                <Form.Control type="text" className="form-control" placeholder="Default input" id="inputDefault" />
              </Form.Group>

              <Form.Group className="form-group">
                <Form.Label className="col-form-label col-form-label-sm" htmlFor="inputSmall">Small input</Form.Label>
                <Form.Control className="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall" />
              </Form.Group>

              <Form.Group className="form-group">
                <Form.Label className="control-label">Input addons</Form.Label>
                <Form.Group className="form-group">
                  <InputGroup className="input-group mb-24">
                    <InputGroup.Text className="input-group-text">$</InputGroup.Text>
                    <Form.Control type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                    <InputGroup.Text className="input-group-text">.00</InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Form.Group>

              <>
                <Form.Group controlId="formFile" className="mb-24">
                  <Form.Label>Default file input example</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-24">
                  <Form.Label>Multiple files input example</Form.Label>
                  <Form.Control type="file" multiple />
                </Form.Group>
                <Form.Group controlId="formFileDisabled" className="mb-24">
                  <Form.Label>Disabled file input example</Form.Label>
                  <Form.Control type="file" disabled />
                </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-24">
                  <Form.Label>Small file input example</Form.Label>
                  <Form.Control type="file" size="sm" />
                </Form.Group>
                <Form.Group controlId="formFileLg" className="mb-24">
                  <Form.Label>Large file input example</Form.Label>
                  <Form.Control type="file" size="lg" />
                </Form.Group>
              </>
            </Form>

            <fieldset>
              <legend>Custom forms</legend>
              <>
                <InputGroup className="mb-24">
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-24">
                  <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                </InputGroup>

                <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
                <InputGroup className="mb-24">
                  <InputGroup.Text id="basic-addon3">
                    https://example.com/users/
                  </InputGroup.Text>
                  <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>

                <InputGroup className="mb-24">
                  <InputGroup.Text>$</InputGroup.Text>
                  <Form.Control aria-label="Amount (to the nearest dollar)" />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>

                <InputGroup>
                  <InputGroup.Text>With textarea</InputGroup.Text>
                  <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>
                <InputGroup className="mb-24">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  <Form.Control aria-label="Text input with checkbox" />
                </InputGroup>
                <InputGroup>
                  <InputGroup.Radio aria-label="Radio button for following text input" />
                  <Form.Control aria-label="Text input with radio button" />
                </InputGroup>
                <InputGroup className="mb-24">
                  <SplitButton
                    variant="outline-secondary"
                    title="Action"
                    id="segmented-button-dropdown-1"
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </SplitButton>
                  <Form.Control aria-label="Text input with dropdown button" />
                </InputGroup>
              </>
              <Form.Group className="form-group">
                <Form.Select className="custom-select">
                  <option selected="">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
              <Form.Control
                type="color"
                id="exampleColorInput"
                defaultValue="#563d7c"
                title="Choose your color"
              />
            </fieldset>

          </Col>
        </Row>
      </ >

      {/* Navs */}
      <>
        <Row className="mt-16">
          <hr />
          <Col sm={12}>
            <h1>Navs</h1>
          </Col>
        </Row>

        <Row style={{ marginBottom: '2rem' }}>
          <Col sm={6}>
            <h2 id="nav-tabs">Tabs</h2>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-24"
            >
              <Tab eventKey="home" title="Home">
                <p>
                  Home
                </p>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <p>
                  Profile
                </p>
              </Tab>
              <Tab eventKey="contact" title="Contact">
                <p>
                  Contact
                </p>
              </Tab>
            </Tabs>
          </Col>

          <Col sm={6}>
            <h2 id="nav-pills">Pills</h2>
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
          </Col>

          <Col sm={6}>
            <h2 id="pagination">Pagination</h2>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Col>
        </Row>
      </ >

      {/* Indicators */}
      <>

        <Row className="mt-16">
          <hr />
          <Col sm={12}>
            <h1>Indicators</h1>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <h2>Alerts</h2>
            <Alert key="primary" variant="primary">
              This is a primary alert—check it out!
            </Alert>
            <Alert key="secondary" variant="secondary">
              This is a secondary alert—check it out!
            </Alert>
            <Alert key="success" variant="success">
              This is a success alert—check it out!
            </Alert>
            <Alert key="danger" variant="danger">
              This is a danger alert—check it out!
            </Alert>
            <Alert key="warning" variant="warning">
              This is a warning alert—check it out!
            </Alert>
            <Alert key="info" variant="info">
              This is a info alert—check it out!
            </Alert>
            <Alert key="light" variant="light">
              This is a light alert—check it out!
            </Alert>
            <Alert key="dark" variant="dark">
              This is a dark alert—check it out!
            </Alert>
          </Col>
        </Row>

        <div>
          <h2>Badges</h2>
          <div>
            <h1>
              Example heading

              <Badge bg="secondary">New</Badge>
            </h1>
            <h2>
              Example heading

              <Badge bg="secondary">New</Badge>
            </h2>
            <h3>
              Example heading

              <Badge bg="secondary">New</Badge>
            </h3>
            <h4>
              Example heading

              <Badge bg="secondary">New</Badge>
            </h4>
            <h5>
              Example heading

              <Badge bg="secondary">New</Badge>
            </h5>
            <h6>
              Example heading

              <Badge bg="secondary">New</Badge>
            </h6>
          </div>
          <div>
            <Badge pill bg="primary">
              Primary
            </Badge>

            <Badge pill bg="secondary">
              Secondary
            </Badge>

            <Badge pill bg="success">
              Success
            </Badge>

            <Badge pill bg="danger">
              Danger
            </Badge>

            <Badge pill bg="warning" text="dark">
              Warning
            </Badge>

            <Badge pill bg="info">
              Info
            </Badge>

            <Badge pill bg="light" text="dark">
              Light
            </Badge>

            <Badge pill bg="dark">
              Dark
            </Badge>
          </div>
        </div>
      </ >

      {/* Progress */}
      <>
        <Row className="mt-16">
          <hr />
          <Col sm={12}>
            <h1>Progress</h1>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <h3 id="progress-basic">Basic</h3>
            <ProgressBar variant="success" now={40} />

            <h3 id="progress-alternatives">Contextual alternatives</h3>
            <ProgressBar now={60} label={`${60}%`} />

            <h3 id="progress-multiple">Multiple bars</h3>
            <ProgressBar variant="success" now={40} />
            <ProgressBar variant="info" now={20} />
            <ProgressBar variant="warning" now={60} />
            <ProgressBar variant="danger" now={80} />

            <h3 id="progress-striped">Striped</h3>
            <ProgressBar striped variant="success" now={40} />
            <ProgressBar striped variant="info" now={20} />
            <ProgressBar striped variant="warning" now={60} />
            <ProgressBar striped variant="danger" now={80} />

            <h3 id="progress-animated">Animated</h3>
            <ProgressBar animated now={45} />

            <h3 id="progress-animated">Stacked</h3>
            <ProgressBar>
              <ProgressBar striped variant="success" now={35} key={1} />
              <ProgressBar variant="warning" now={20} key={2} />
              <ProgressBar striped variant="danger" now={10} key={3} />
            </ProgressBar>
          </Col>
        </Row>
      </ >

      {/* Containers */}
      <>
        <Row className="mt-16">
          <hr />
          <Col sm={12}>
            <h1>Containers</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <div className="page-header">
              <h2 id="containers">Containers</h2>
            </div>
            <div className="bs-component">
              <div className="jumbotron">
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">
                  This is a simple hero unit, a simple jumbotron-style component for calling extra attention
                  to featured content or information.

                </p>
                <hr className="my-42" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                  <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <h2>List groups</h2>
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <div className="bs-component">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Cras justo odio
                  <span className="badge badge-primary badge-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Dapibus ac facilisis in
                  <span className="badge badge-primary badge-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Morbi leo risus
                  <span className="badge badge-primary badge-pill">1</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={4}>
            <div className="bs-component">
              <div className="list-group">
                <a href="/" className="list-group-item list-group-item-action active">
                  Cras justo odio
                </a>
                <a href="/" className="list-group-item list-group-item-action">
                  Dapibus ac facilisis in
                </a>
                <a href="/" className="list-group-item list-group-item-action disabled">
                  Morbi leo risus
                </a>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="bs-component">
              <div className="list-group">
                <a href="/" className="list-group-item list-group-item-action flex-column align-items-start active">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                    blandit.

                  </p>
                  <small>Donec id elit non mi porta.</small>
                </a>
                <a href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-8">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-8">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                    blandit.

                  </p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <h2>Cards</h2>
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <Card border="primary" bg="primary" className="text-white mb-24">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="secondary" bg="secondary" className="text-white mb-24">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Secondary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="success" bg="success" className="text-white mb-24">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>success Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="danger" bg="danger" className="text-white mb-24">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>danger Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="warning" bg="warning" className="text-white mb-24">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Secondary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="info" bg="info" className="mb-24">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>info Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="light" bg="light" className="mb-24">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>light Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="dark" bg="dark" className="text-white mb-24">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>dark Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card border="primary" className="mb-24">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="secondary" className="mb-24">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Secondary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="success" className="mb-24">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>success Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="danger" className="mb-24">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>danger Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="warning" className="mb-24">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Secondary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="info" className="mb-24">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>info Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="light" className="mb-24">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>light Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="dark" className="mb-24">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>dark Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </ >

      {/* Grid */}
      <>
        <Row className="mt-16">
          <hr />
          <Col sm={12}>
            <h1>Grid</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Container>
              <Row>
                <Col md={4} className="bg-success">md=4</Col>
                <Col md={{ span: 4, offset: 4 }} className="bg-success">{'md={{ span: 4, offset: 4 }}'}</Col>
              </Row>
              <Row>
                <Col md={{ span: 3, offset: 3 }} className="bg-success">{'md={{ span: 3, offset: 3 }}'}</Col>
                <Col md={{ span: 3, offset: 3 }} className="bg-success">{'md={{ span: 3, offset: 3 }}'}</Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 3 }} className="bg-success">{'md={{ span: 6, offset: 3 }}'}</Col>
              </Row>
              <Row xs={2} md={4} lg={6}>
                <Col className="bg-success">1 of 2</Col>
                <Col className="bg-success">2 of 2</Col>
              </Row>
              <Row xs={1} md={2}>
                <Col className="bg-success">1 of 3</Col>
                <Col className="bg-success">2 of 3</Col>
                <Col className="bg-success">3 of 3</Col>
              </Row>
              <Row xs="auto">
                <Col className="bg-success">1 of 3</Col>
                <Col className="bg-success">2 of 3</Col>
                <Col className="bg-success">3 of 3</Col>
              </Row>
            </Container>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <h2>List groups</h2>
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={4}>
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item as="li" disabled>
                Morbi leo risus
              </ListGroup.Item>
              <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={4}>
            <ListGroup defaultActiveKey="#link1">
              <ListGroup.Item action href="#link1">
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action href="#link2" disabled>
                Link 2
              </ListGroup.Item>
              {/* eslint-disable-next-line no-alert */}
              <ListGroup.Item action onClick={() => alert('clicked')}>
                This one is a button
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

      </ >

      {/* Dialogs */}
      <>
        <Row className="mt-16">
          <hr />
          <Col sm={12}>
            <h1>Dialogs</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <h2>Modals</h2>
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col sm={6}>
            <h2>Popovers</h2>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Button variant="success">Click me to see</Button>
            </OverlayTrigger>
            <h2>Tooltips</h2>
            <>
              <Button ref={target} onClick={() => setShowTooltip(!showTooltip)}>
                Click me!
              </Button>
              <Overlay target={target.current} show={showTooltip} placement="right">
                {(props) => (
                  <Tooltip id="overlay-example" {...props}>
                    My Tooltip
                  </Tooltip>
                )}
              </Overlay>
              <OverlayTrigger
                key="right"
                placement="right"
                overlay={(
                  <Tooltip id={`tooltip-${'right'}`}>
                    Tooltip on

                    <strong>right</strong>
                    .
                  </Tooltip>
                )}
              >
                <Button variant="secondary">
                  Tooltip on

                  right
                </Button>
              </OverlayTrigger>
              <OverlayTrigger
                key="center"
                placement="center"
                overlay={(
                  <Tooltip id="tooltip-center">
                    Tooltip on

                    <strong>center</strong>
                    .
                  </Tooltip>
                )}
              >
                <Button variant="secondary">
                  Tooltip on

                  center
                </Button>
              </OverlayTrigger>
              <OverlayTrigger
                key="left"
                placement="left"
                overlay={(
                  <Tooltip id={`tooltip-${'left'}`}>
                    Tooltip on

                    <strong>left</strong>
                    .
                  </Tooltip>
                )}
              >
                <Button variant="secondary">
                  Tooltip on

                  left
                </Button>
              </OverlayTrigger>
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={(
                  <Tooltip id={`tooltip-${'bottom'}`}>
                    Tooltip on

                    <strong>bottom</strong>
                    .
                  </Tooltip>
                )}
              >
                <Button variant="secondary">
                  Tooltip on

                  bottom
                </Button>
              </OverlayTrigger>
            </>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
      </ >
    </Container>
  );
};

export default UiKit;