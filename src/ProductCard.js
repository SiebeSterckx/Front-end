import React from 'react'
import {Card} from 'antd'


function ProductCard(props) {

        return(
            <Card title={props.product.name} bordered={false}>
              <p>{props.product.price}</p>
              <p>{props.product.description}</p>
            </Card>
        )
    
}

export default ProductCard