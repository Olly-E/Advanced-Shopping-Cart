import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from '../Data/Items.json'
import { formatCurrency } from "../Utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}


export function CartItem({id, quantity}: CartItemProps) {
  const {removeFromCart} = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if(item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={item.imgUrl} style={{width: '125px', height: '75px', objectFit: 'cover'}} alt="" />
        <div className="me-auto">
            <div>
                {item.name}{" "}
                {quantity > 1 && (<span className="text-muted" 
                style={{fontSize: '.65rem'}}>{quantity}x
                </span>
                )}
            </div>
            <div className="text-muted" style={{fontSize: '.75rem'}}>
                {formatCurrency(item.price * quantity)}
            </div>
        </div>
        <div> {formatCurrency(item.price * quantity)}</div>
        <Button variant="outline-danger" size="sm">&times;</Button>
    </Stack>
  )

}