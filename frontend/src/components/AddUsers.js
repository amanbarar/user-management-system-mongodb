import { useState } from "react";

import { Button, FormControl, FormGroup, Input, InputLabel, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px
    }
`

const defaultValue = {
    name: "",
    username: "",
    email: "",
    phone: ""
}

const AddUser = () => {
    const [user, setUser] = useState(defaultValue);
    const onValueChange = (e) => {
        console.log(e.target.name, e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value }) //avoids override
        console.log(user);
    }

    return(
            <Container>
                <Typography variant="h6">Add User(s)</Typography>
                    <FormControl>
                        <InputLabel>Username</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="username"/>
                    </FormControl>
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