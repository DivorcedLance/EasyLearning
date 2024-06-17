import React from 'react'
import { CardProfile } from '../components/CardProfile';
import { CourseSelector } from '../components/CourseSelector';

function Panel({vista, role}) {
    switch(vista) {
        case 'datos':
          return <CardProfile role={role}/>;
        case 'cursos':
          return <CourseSelector />;
        default:
          return <div>Vista por Defecto</div>;
      }
}

export default Panel