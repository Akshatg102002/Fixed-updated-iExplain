import React from 'react';
import { MBBSIndiaCollegeDetailData } from '../types';
import StudyAbroadCollegeDetailPage from './StudyAbroadCollegeDetailPage';

interface Props {
  data: MBBSIndiaCollegeDetailData;
}

const MBBSinindiadetailpage: React.FC<Props> = ({ data }) => {
  return <StudyAbroadCollegeDetailPage data={data} />;
};

export default MBBSinindiadetailpage;
