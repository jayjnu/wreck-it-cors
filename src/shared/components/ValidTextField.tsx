import {TextField} from "@mui/material"
import {styled} from "@mui/system"


export const ValidTextField = styled(TextField)(
  {
    // '& input:valid + fieldset': {
    //   borderColor: 'green',
    //   borderWidth: 2,
    // },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important',
    }
  }
);
