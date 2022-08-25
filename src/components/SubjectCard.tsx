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
        subject card
    </div>
  );
}

export default SubjectCard;
