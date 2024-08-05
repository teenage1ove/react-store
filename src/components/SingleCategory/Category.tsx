import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../../features/api/apiSlice'
import styles from '../../styles/Category.module.css'
import Products from '../Products/Products'

const Category:FC = () => {
    const {category} = useParams()
    const {data, isLoading, isSuccess} = useGetProductsQuery(category)
    const [categoryData, setCategoryData] = useState(data!)
    const defaultValues = {
        title: '',
        price_min: '',
        price_max: ''
    }
    const [values, setValues] = useState(defaultValues)

    useEffect(() => {
        if (data) {
            let newData = data.filter(i => i.category === category)
            setCategoryData(newData)
        }
    }, [data, category])
    
    function handleChange({target}: ChangeEvent<HTMLInputElement>) {
        const {name,value} = target
        setValues({...values, [name]: value})
    }

    return (
        <section className={styles.wrapper}>
            <h2>{category?.toUpperCase()}</h2>
            <form className={styles.filters} onSubmit={() => {}}>
                <div className={styles.filter}>
                    <input 
                        type='text'
                        name='title'
                        onChange={handleChange}
                        placeholder='Product name'
                        value={values.title}
                    />
                </div>

                <div className={styles.filter}>
                    <input 
                        type='number'
                        name='price_min'
                        onChange={handleChange}
                        placeholder='0'
                        value={values.price_min}
                    />
                </div>
                <div className={styles.filter}>
                    <input 
                        type='number'
                        name='price_max'
                        onChange={handleChange}
                        placeholder='100'
                        value={values.price_max}
                    />
                </div>
            </form>
            
            {isLoading ? (
                <div>Is loading...</div>
            ) : (
                !isSuccess || !data.length ? (
                    <div className={styles.back}>
                        <span>No results</span>
                        <button>Reset</button>
                    </div>
                ) : (
                    <Products products={categoryData} title='' style={{padding: 0}} amount={data.length}/>
                )
            )}
        </section>
    )
}

export default Category
