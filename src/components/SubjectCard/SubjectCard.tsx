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
import formatDate from '../../utils/formarDate';
import MenuOptions from '../MenusOptions/MenuOptions';

interface SubjectCardPropsShape {
  subject: {
    id: number;
    name: string;
    description: string;
    createdAt: string;
  };
}

function SubjectCard({ subject }: SubjectCardPropsShape) {
  const [isActive, setIsActive] = useState(false);

  const setModalVisibility = () => {
    setIsActive(!isActive);
  };

  const formatedDate = formatDate(subject.createdAt);
  return (
    <SubjectCardContainer>
      <SubjectCardHeader>
        <SubjectCardHeaderTitle>{subject.name}</SubjectCardHeaderTitle>
        <span>{formatedDate}</span>
      </SubjectCardHeader>
      <SubjectCardDescriptionContainer>
        <SubjectCardHeaderDescription>
          {subject.description}
        </SubjectCardHeaderDescription>
        <div>
          <SubjectCardDotsOptions onClick={setModalVisibility}>
            <BsThreeDotsVertical />
          </SubjectCardDotsOptions>
          {isActive && <MenuOptions subject={subject} />}
        </div>
      </SubjectCardDescriptionContainer>
    </SubjectCardContainer>
  );
}

export default SubjectCard;
