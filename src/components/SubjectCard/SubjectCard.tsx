import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {
  SubjectCardContainer,
  SubjectCardDescriptionContainer,
  SubjectCardDotsOptions,
  SubjectCardHeader,
  SubjectCardHeaderDescription,
  SubjectCardHeaderTitle,
} from '.';
import MenuOptions from '../MenusOptions/MenuOptions';

interface SubjectCardPropsShape {
  subject: {
    name: string;
    description: string;
    timestamps: string;
  };
}

function SubjectCard({ subject }: SubjectCardPropsShape) {
  const [isActive, setIsActive] = useState(false);

  return (
    <SubjectCardContainer>
      <SubjectCardHeader>
        <SubjectCardHeaderTitle>{subject.name}</SubjectCardHeaderTitle>
        <span>{subject.timestamps}</span>
      </SubjectCardHeader>
      <SubjectCardDescriptionContainer>
        <SubjectCardHeaderDescription>
          {subject.description}
        </SubjectCardHeaderDescription>
        <div>
          <SubjectCardDotsOptions onClick={() => setIsActive(!isActive)}>
            <BsThreeDotsVertical />
          </SubjectCardDotsOptions>
          {isActive && <MenuOptions />}
        </div>
      </SubjectCardDescriptionContainer>
    </SubjectCardContainer>
  );
}

export default SubjectCard;
