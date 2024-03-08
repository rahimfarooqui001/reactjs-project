import { useState } from "react";

const Detail=()=>{
    useState()
    const [state,setState]=[
        {
          "user_id": "583c3ac3f38e84297c002546",
          "email": "test@test.com",
          "name": "test@test.com",
          "given_name": "Hello",
          "family_name": "Test",
          "nickname": "test",
          "last_ip": "94.121.163.63",
          "logins_count": 15,
          "created_at": "2016-11-28T14:10:11.338Z",
          "updated_at": "2016-12-02T01:17:29.310Z",
          "last_login": "2016-12-02T01:17:29.310Z",
          "email_verified": true
        },
        {
          "user_id": "583c5484cb79a5fe593425a9",
          "email": "test1@test.com",
          "name": "test1@test.com",
          "given_name": "Hello1",
          "family_name": "Test1",
          "nickname": "test1",
          "last_ip": "94.121.168.53",
          "logins_count": 1,
          "created_at": "2016-11-28T16:00:04.209Z",
          "updated_at": "2016-11-28T16:00:47.203Z",
          "last_login": "2016-11-28T16:00:47.203Z",
          "email_verified": true
        },
        {
          "user_id": "583c57672c7686377d2f66c9",
          "email": "aaa@aaa.com",
          "name": "aaa@aaa.com",
          "given_name": "John",
          "family_name": "Dough",
          "nickname": "aaa",
          "last_ip": "94.121.168.53",
          "logins_count": 2,
          "created_at": "2016-11-28T16:12:23.777Z",
          "updated_at": "2016-11-28T16:12:52.353Z",
          "last_login": "2016-11-28T16:12:52.353Z",
          "email_verified": true
        },
        {
          "user_id": "5840b954da0529cd293d76fe",
          "email": "a@a.com",
          "name": "a@a.com",
          "given_name": "Jane",
          "family_name": "Dough",
          "nickname": "a",
          "last_ip": "94.121.163.63",
          "logins_count": 3,
          "created_at": "2016-12-01T23:59:16.473Z",
          "updated_at": "2016-12-01T23:59:53.474Z",
          "last_login": "2016-12-01T23:59:53.474Z",
          "email_verified": true
        },
        {
          "user_id": "584a9d13e808bcf75f05f580",
          "email": "test9999@test.com",
          "given_name": "Dummy",
          "family_name": "User",
          "created_at": "2016-12-09T12:01:23.787Z",
          "updated_at": "2016-12-09T12:01:23.787Z",
          "email_verified": false
        }
      ]
      console.log(state);
    return(
        <div>

            <div className="row">
                
                <div className="col-md-4 mb-4">
                    <div className="main-card">
        <div className="mb-2">
        <span>User Name </span> : <span>{state.name}</span>
        </div>
        <div className="mb-2">
        <span>Email </span> : <span>{state.email}</span>
        </div>

        <div className="mb-2">
        <span>Verification</span> : <span>{state.email_verified ? 'Verified':'Not verified'}</span>
        </div>

        <div className="mb-2">
        <span>Nick name </span> : <span>{state.nickname}</span>
        </div>



       
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="main-card">
        <div className="mb-2">
        <span>User Name </span> : <span>{state.name}</span>
        </div>
        <div className="mb-2">
        <span>Email </span> : <span>{state.email}</span>
        </div>

        <div className="mb-2">
        <span>Verification</span> : <span>{state.email_verified ? 'Verified':'Not varified'}</span>
        </div>

        <div className="mb-2">
        <span>Nick name </span> : <span>{state.nickname}</span>
        </div>



       
                    </div>
                </div>
            </div>
        
        </div>
    )
}


export default Detail;