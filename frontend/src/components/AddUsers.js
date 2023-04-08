import { Button, FormControl, FormGroup, Input, InputLabel, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px
    }
`

const AddUser = () => {

    const onValueChange = (e) => {
        console.log(e.target.value);
    }

    return(
            <Container>
                <Typography variant="h6">Add User(s)</Typography>
                    <FormControl>
                        <InputLabel>Name</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="name"/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Email</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="email"/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Phone</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="phone"/>
                    </FormControl>
                    <FormControl>
                        <Button variant="contained">Add User</Button>
                    </FormControl>
            </Container>
    );
}

export default AddUser;