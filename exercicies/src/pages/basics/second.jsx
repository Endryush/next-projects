import List from "../../components/List/List"
import ItemList from '../../components/List/ItemList'
import Button from "../../components/button"
import Form from "../../components/form"
export default function second () {
  return (
    <div>
      <h1>Second Page</h1>
      <List>
        <ItemList content="Lalala" />
        <ItemList content="Lalala" />
        <ItemList content="Lalala" />
        <ItemList content="Lalala" />
      </List>
      <Form />
      <Button />
    </div>
  )
}