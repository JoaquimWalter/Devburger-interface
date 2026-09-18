import PropTypes from 'prop-types';
import { CardImage, Container } from './styles';
import { CardButton } from '../CardButton';
import { formatPrice } from '../../utils/formartPrice';

export function CardProduct({ product }) {
    return (
        <Container>
            <CardImage src={product.url} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{formatPrice(product.price)}</strong>
            </div>
            <CardButton></CardButton>
        </Container>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object,
}