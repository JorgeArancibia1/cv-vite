import { Item } from '../../interfaces';
import './index.css';
// import { GrCertificate } from 'react-icons/gr';

type CertificationsProps = {
	items: Item[] | [];
};

export const Certifications = ({items}: CertificationsProps) => {
  console.log('items => ', items)
	return (
		<section className='certifications'>
      {
        items.map((item, index) => (
          <div className='' key={index}>
            <p>
              <b>{item.item}</b>
            </p>
            <span>{item.content}</span>
          </div>
        ))
      }
		</section>
	);
};

{
	/*
      <section className="flex-wrap d-flex min articleBox mt-5 ml-xl-1">
        {props.items.map !== [] && props.items.map((dat, index) =>
          (
            <dl className="d-flex ml-3 pl-2 row box" key={index}>
              <dt>{dat.item}</dt>
              <dd className="col-11 pl-2 pr-3">{dat.content}</dd>
            </dl>
          ))}
    */
}
