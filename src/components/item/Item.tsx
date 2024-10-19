import './Item.css';
import testImg from '../../assets/test_img.png';
import heart from '../../assets/ic_heart.svg';
import { formatNumberWithCommas } from '../../utils/numberFormat';
import { Link } from 'react-router-dom';
import { Product } from '../../services/itemApiTypes';

interface ItemProps
  extends Pick<Product, 'id' | 'images' | 'name' | 'price' | 'favoriteCount'> {
  imgSize: 'small' | 'large';
}

function Item({
  id,
  images = [testImg],
  name,
  price,
  favoriteCount,
  imgSize = 'small',
}: ItemProps) {
  const additionalClass = imgSize === 'large' ? 'large-img' : 'small-img';

  const imgClassName = `Item-img ${additionalClass}`;

  return (
    <Link to={`/items/${id}`}>
      <div className="Item">
        <img className={imgClassName} src={images[0]} alt={name} />
        <div className="Item-description">
          <span className="Item-title">{name}</span>
          <span className="Item-price">{formatNumberWithCommas(price)}원</span>
          <div className="Item-description-favorite">
            <img src={heart} alt="좋아요 아이콘" />
            <span className="Item-favorite-count">
              {formatNumberWithCommas(favoriteCount)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Item;
