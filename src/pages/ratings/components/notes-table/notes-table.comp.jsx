import React from 'react';
import Courses from './course/course.comp';
import Students from './students/students.comp';
import'./notes-table.style.css';

const NotesTable = () => {
    return (
       <div className="notes-table-container">
          <div className="titulo">Name Grade Gender</div>
            <Courses asCourses="Cibersociedad"/>
           <Students product={{
                name:"CARLOS",
                grade:2,
                gender:"M",
                
           
            }}/>
            <Students product={{
                name:"PABLO",
                grade:3.1,
                gender:"M",
                
            }}/>
            <Students product={{
                name:"ANDRES",
                grade:2.9,
                gender:"M",
                
            }}/>
            <Students product={{
                name:"JUANITO",
                grade:2.6,
                gender:"M",
              
            }}/>
            <Students product={{
                name:"GERAL",
                grade:2.5,
                gender:"F",
               
            }}/>
            <Students product={{
                name:"LOAIZA",
                grade:4,
                gender:"M",
                
            }}/>
            <Students product={{
                name:"DIANA",
                grade:2.7,
                gender:"F",
                
            }}/>
<Courses asCourses="Matematicas"/>
            <Students product={{
                name:"LINA",
                grade:4.1,
                gender:"F",
               
            }}/>
            <Students product={{
                name:"VERO",
                grade:3,
                gender:"F",
               
            }}/>
            <Students product={{
                name:"JORGE",
                grade:3.8,
                gender:"M"
              
            }}/>
            <Students product={{
                name:"OLGA",
                grade:4,
                gender:"F",
              
            }}/>
            <Students product={{
                name:"ANGELA",
                grade:1.5,
                gender:"F",
               
            }}/>
            <Students product={{
                name:"KAREN",
                grade:4.0,
                gender:"F",
             
            }}/>
            <Students product={{
                name:"luisa",
                grade:1,
                gender:"F",
               
            }}/>
            <Courses asCourses="Programacion"/>
            <Students product={{
                name:"GUAPA",
                grade:4,
                gender:"M",
               
            }}/>
            <Students product={{
                name:"SALMON",
                grade:4,
                gender:"M",
                
            }}/>
            <Students product={{
                name:"ALEX",
                grade:2.6,
                gender:"M",
               
            }}/>
            <Students product={{
                name:"LUIS",
                grade:4.1,
                gender:"M",
               
            }}/>
            <Students product={{
                name:"PABLO",
                grade:2.8,
                gender:"F",
               
            }}/>
            <Students product={{
                name:"ANYI",
                grade:3.8,
                gender:"F",
             
            }}/>
            <Students product={{
                name:"LUISA",
                grade:5,
                gender:"F",
            
            }}/>


               
       </div>
      
     );
}
export default NotesTable;          