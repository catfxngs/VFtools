import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface Props {
  reqs: Number[][]
}

const headings = [ 'LEVEL', 'PUC', 'UC', 'EXC', 'EFF' ];

const ReqsTable = ({ reqs }: Props) => {
  return (
    <TableContainer className="table">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow key="headings">
            {headings.map((name, headingIdx) => (
              <TableCell align="left" key={`heading-${headingIdx}`}>{name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {reqs.map((level: Number[], levelIdx) => (
            <TableRow key={`level-${20 - levelIdx}`}>
              <TableCell key={`level-${20 - levelIdx}-entry`}>{20 - levelIdx}</TableCell>
            {level.map((clear, clearIdx) => (
              <TableCell
                align="left"
                key={`level-${20 - levelIdx}-${headings[clearIdx + 1]}`}
              >{
                clearIdx === 0
                  ? (clear === 1000 ? '✅' : '❌')
                  : (clear !== 0
                    ? clear !== 1000
                      ? String(clear) : '-'
                      : '-')
              }</TableCell>
            ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ReqsTable;
