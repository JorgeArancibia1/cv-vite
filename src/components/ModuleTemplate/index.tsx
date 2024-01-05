import { FaUserAlt } from 'react-icons/fa';
import './index.css'

// definir tipado props con children
type ModuleTemplateProps = {
  children: React.ReactNode;
  title: string;
};

const ModuleTemplate = ({ children, title }: ModuleTemplateProps) => {
  return (
    <section>
      <article className='dp-row'>
        <FaUserAlt className='dp-icon-title' size={'1.5em'} color='#0093D3' />
        <h5 className='dp-title'>{title}</h5>
      </article>

      <div className='dp-content'>
        <div className='space'></div>
        {children}
      </div>
    </section>
  );
};

export default ModuleTemplate;
