import React, { useState } from 'react';
import { Card, Container, DropdownItem, Col, Row } from 'reactstrap';
import Item from './ReorderableItem';
import List from './ReorderableList';
import './style.css';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Alpha', selected: false },
    { id: 2, name: 'Bravo', selected: false },
    { id: 3, name: 'Charlie', selected: false },
    { id: 4, name: 'Delta', selected: false },
    { id: 5, name: 'Echo', selected: false },
    { id: 6, name: 'Foxtrot', selected: false },
  ]);

  console.log('render');

  return (
    <Container className="py-3" fluid>
      <h3>Works</h3>
      <p>TODO onReorder replacing selected state?</p>
      <Row>
        <Col xs={8}>
          <Card>
            <List
              flush
              id="all"
              items={items}
              onReorder={(newItems) => {
                setItems(newItems);
                console.log('reodred');
              }}
            >
              {items.map((item) => (
                <Item
                  id={item.id}
                  key={item.id}
                  menu={[
                    <DropdownItem>Action for {item.name}</DropdownItem>,
                    <DropdownItem>Another action</DropdownItem>,
                    <DropdownItem>Something else</DropdownItem>,
                  ]}
                  selected={item.selected}
                  onExpand={<h3>Expanded {item.name}!</h3>}
                  onSelect={(selected) => {
                    setItems(
                      items.map((i) => {
                        if (i === item) return { ...i, selected };
                        return i;
                      })
                    );
                  }}
                >
                  {item.name}
                </Item>
              ))}
            </List>
          </Card>
        </Col>
        <Col xs={4}>
          <pre>{JSON.stringify(items, null, '  ')}</pre>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
