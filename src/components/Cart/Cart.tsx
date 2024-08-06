import { FC } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { sumBy } from '../../utils/common'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { IProductItem } from '../../features/types'
import { addItemToCart, removeItemFromCart } from '../../features/user/userSlice'
import styles from '../../styles/Cart.module.css'
const Cart: FC = () => {
    const cart = useAppSelector(state => state.user.cart)
    const dispatch = useAppDispatch()
    function changeQuantity(item: IProductItem, quantity: number) {
        if (quantity <= 0) return
        dispatch(addItemToCart({...item, quantity}))
    }

    function removeItem(item: IProductItem) {
        dispatch(removeItemFromCart(item))
    }

  return (
    <section className={styles.cart}>
      <h2>Cart</h2>
      {!cart.length ? (
        <div className={styles.empty}>Here is empty</div>
      ) : (
        <>
            <div className={styles.list}>
                {cart.map(item => {
                    const {title, category, image, price, id, quantity} = item
                    return (
                        <div className={styles.item} key={id}>
                            <div
                                className={styles.image}
                                style={{
                                    backgroundImage: `url(${image})`,
                                }}
                            />
                            <div className={styles.info}>
                                <div className={styles.name}>{title}</div>
                                <div className={styles.category}>{category}</div>
                            </div>
                            <div className={styles.price}>{price}$</div>
                            <div className={styles.quantity}>
                                <div className={styles.minus} onClick={() => changeQuantity(item, quantity! - 1)}><AiOutlineMinus /></div>
    
                                {<span>{quantity}</span>}
    
                                <div className={styles.plus} onClick={() => changeQuantity(item, quantity! + 1)}><AiOutlinePlus /></div>
    
                                
                            </div>
                            <div className={styles.total}>{price && quantity ? price * quantity : 0}$</div>
                            <div className={styles.close} onClick={() => removeItem(item)}><AiOutlineClose /></div>
                        </div>
                    )
                })}
            </div>

            <div className={styles.actions}>
                <div className={styles.total}>
                    TOTAL PRICE: {" "}
                    <span>
                        {sumBy(cart.map(item => item.price && item.quantity ? (item.price * item.quantity) : 0))}$
                    </span>
                </div>

                <button>Proceed to checkout</button>
            </div>
        </>
      )}
    </section >
  )
}

export default Cart
