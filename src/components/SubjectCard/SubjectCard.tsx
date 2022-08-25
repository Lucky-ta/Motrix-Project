import React from 'react';

interface SubjectCardPropsShape {
    subject: {
        name: string;
        description: string;
        timestamps: string;
    }
}

function SubjectCard({ subject }:SubjectCardPropsShape) {
  return (
    <div>
      <div>
        <h2>{subject.name}</h2>
        <span>{subject.timestamps}</span>
      </div>
      <p>
        {subject.description}
      </p>

      <button type="button">Editar</button>
      <button type="button">Excluir</button>
    </div>
  );
}

export default SubjectCard;
