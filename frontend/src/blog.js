import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Error, Header, Footer, Modal } from './components'
import {Authorization, Post, Main, Registration, Users} from './pages'
import { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from './actions'
import { ERROR } from './constants'

const AppColumn = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 1000px;
   margin: 0 auto;
   min-height: 100%;
   background-color: #fff;
   position: relative;
`

const Page = styled.div`
    padding: 120px 0 20px;
`

function Blog() {
    const dispatch = useDispatch();

    useLayoutEffect(()=>{
        const currentUserDataJSON = sessionStorage.getItem('userData');

        if(!currentUserDataJSON) {
            return;
        }

        const currentUserData = JSON.parse(currentUserDataJSON);

        dispatch(setUser({
            ...currentUserData,
            roleId:Number(currentUserData.roleId)}))

    },[dispatch])

    return (
        <AppColumn>
            <Header />
            <Page>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/login' element={<Authorization/>}/>
                    <Route path='/register' element={<Registration/>}/>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='/post' element={<Post/>}/>
                    <Route path='/post/:id' element={<Post/>}/>
                    <Route path='/post/:id/edit' element={<Post/>}/>
                    <Route path='*' element={<Error error={ERROR.PAGE_NOT_EXIST}/>}/>
                </Routes>
            </Page>
            <Footer/>
            <Modal/>
        </AppColumn>
  );
}

export default Blog;
