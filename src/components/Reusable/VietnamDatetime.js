import { Typography } from '@mui/material';
import React from 'react';
import { getVietNamDatetime } from '../../utilities/DatetimeUtils';

const VietNamDatetime = () => {
  const vietnamFullDate = getVietNamDatetime();
  const vietnamTimeValue = (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: '400',
        fontSize: { xs: '10px', sm: '12px' },
        color: 'rgba(255, 255, 255, .7)',
        lineHeight: 1,
        paddingRight: '2px',
        fontFamily: 'Poppins',
      }}
    >
      {vietnamFullDate} GMT+7
    </Typography>
  );
  return vietnamTimeValue;
};

export default VietNamDatetime;
