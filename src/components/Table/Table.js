import React from 'react';
import { Table } from 'semantic-ui-react';

const TableComponent = (props) =>(
    <Table celled padded>
    <Table.Header>
    <Table.Row>
      {props.headers? props.headers.map((header)=>{
          return <Table.HeaderCell singleLine>{header.name}</Table.HeaderCell>
      }): null}
    </Table.Row>
  </Table.Header>
  <Table.Body>
      {props.tableData ? props.tableData.map((data)=>{
          return(
              <Table.Row>
                  {data.elements.map((el)=>{
                      return <Table.Cell>
                          {el}
                      </Table.Cell>
                  })}
              </Table.Row>
          )
      }) : null}
  </Table.Body>
  </Table>
)

export default TableComponent;