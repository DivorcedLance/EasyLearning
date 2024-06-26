import { CardProfile } from '../components/CardProfile';
import { CourseSelector } from '../components/CourseSelector';
import { ActivityManagement } from './ActivityManagement';

function Panel({vista, role}) {
    switch(vista) {
        case 'datos':
          return <CardProfile role={role}/>;
        case 'cursos':
          return <CourseSelector />;
        case 'activity_management':
          return <ActivityManagement />;
        case 'question_management':
          return <div>Administración de Preguntas</div>;
        case 'reports':
          return <div>Reportes</div>;
        case 'media':
          return <div>Recursos Digitales</div>;
        default:
          return <div>Vista por Defecto</div>;
      }
}

export default Panel