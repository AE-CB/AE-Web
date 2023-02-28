import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import Price from '../../components/Price';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from '../../components/Slider';
import { getCookie } from 'cookies-next';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSession, signIn } from 'next-auth/react'
import Slide from '@mui/material/Slide';
import SimilarVehicles from '../../components/SimilarVehicles';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

import { Alert } from '@mui/material';

const Car = ({ vehicle }) => {

    const [open, setOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [openEditQuestion, setOpenEditQuestion] = useState(false);
    const [openEditAnswer, setOpenEditAnswer] = useState(false);
    const [questionId, setQuestionId] = useState(null);
    const [questionText, setQuestionText] = useState("");
    const [questionAnswer, setQuestionAnswer] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");

    const success_alert = useRef(null);

    const handleClickOpen = (item, type) => {
        setQuestionId(item.id)
        setQuestionText(item.question)
        setQuestionAnswer(item.answer)

        if (type == 'unAnswered') {
            setOpen(true);
        }

        if (type == 'unApproved') {
            setOpenEditQuestion(true);
        }

        if (type == 'unApprovedAnswer') {
            setOpenEditAnswer(true);
        }
    };



    const handleClose = () => {
        setOpen(false);
        setOpenLogin(false)
        setOpenEditQuestion(false)
        setOpenEditAnswer(false)
    };

    const submitAnswer = async () => {

        let formData = new FormData();
        formData.append('id', questionId);
        formData.append('answer', questionAnswer);

        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/answer_question', {
            method: 'POST',
            body: formData,
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
            })
        })
        setOpen(false);
        if (res.status == 200) {
            getAnsweredQuestions()
            getUnAnsweredQuestions()
            setShowAlert(true);
            setAlertMsg('Thanks for Answering the question')
            success_alert.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }

    }

    var notran = true;
    useEffect(() => {
        if (notran) {
            getAnsweredQuestions()
            getUnAnsweredQuestions()
            getUnAnApprovedQuestions()
            getUnApprovedAnswers()
            notran = false
        }
    }, [])


    let images = JSON.parse(vehicle.data.images)

    const [question, setQuestion] = useState("");
    // Unapproved questions for vehicle
    const [unApprovedQuestions, setUnApprovedQuestions] = useState([]);
    // Answered questions(Approved Answers) for vehicle
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    // Unapproved answers for vehicle
    const [unApprovedAnswers, setUnApprovedAnswers] = useState([]);
    // Unanswered questions for vehicle(Visible only to user)
    const [unAnsweredQuestions, setUnAnsweredQuestions] = useState([]);

    const getUnApprovedAnswers = async () => {
        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/unapproved_answers/' + vehicle.data.id, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
            })
        })

        if (res.status == 200) {
            setUnApprovedAnswers(await res.json())
        }
    }

    const getAnsweredQuestions = async () => {
        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/answered_questions/' + vehicle.data.id, {
            method: 'GET',
        })

        if (res.status == 200) {
            setAnsweredQuestions(await res.json())
        }
    }

    const getUnAnsweredQuestions = async () => {
        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/unanswered_questions/' + vehicle.data.id, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
            })
        })

        if (res.status == 200) {
            setUnAnsweredQuestions(await res.json())
        }
    }

    const getUnAnApprovedQuestions = async () => {
        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/unapproved_questions/' + vehicle.data.id, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
            })
        })

        if (res.status == 200) {
            setUnApprovedQuestions(await res.json())
        }
    }


    const token = getCookie('accessToken');

    const { data: session } = useSession();
    const submitQuestion = async (e) => {
        e.preventDefault();

        if (session) {
            let formData = new FormData();
            formData.append('question', question);
            formData.append('vehicle_id', vehicle.data.id);

            const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/questions', {
                method: 'POST',
                body: formData,
                headers: new Headers({
                    'Authorization': 'Bearer ' + token,
                })
            })

            // console.log(question)
            if (res.status == 201) {
                setShowAlert(true);
                setAlertMsg('Thanks for asking the question. Vehicle owner will answer soon.')
                getUnAnApprovedQuestions()
                success_alert.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }

            setQuestion("")
        } else {
            setOpenLogin(true)
        }
    }

    const editQuestion = async (e) => {
        if (session) {
            let formData = new FormData();
            formData.append('id', questionId);
            formData.append('question', questionText);

            const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/edit_question', {
                method: 'POST',
                body: formData,
                headers: new Headers({
                    'Authorization': 'Bearer ' + token,
                })
            })

            if (res.status == 200) {
                setShowAlert(true);
                setAlertMsg('Your question is edited')
                getUnAnApprovedQuestions()
                success_alert.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }

            setOpenEditQuestion(false)
        }
    }

    const editAnswer = async (e) => {
        if (session) {
            let formData = new FormData();
            formData.append('id', questionId);
            formData.append('answer', questionAnswer);

            const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/answer_question', {
                method: 'POST',
                body: formData,
                headers: new Headers({
                    'Authorization': 'Bearer ' + token,
                })
            })

            if (res.status == 200) {
                setShowAlert(true);
                setAlertMsg('Your answer is edited')
                getUnApprovedAnswers()
                success_alert.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }

            setOpenEditAnswer(false)
        }
    }

    const handleSignin = (e) => {
        e.preventDefault()
        signIn()
    }

    return (

        <main className="main-car">
            <div className="return-comprar">
                <Link className="btn-return-comprar" href={'/vehicles'}>
                    <svg className="svg-inline--fa fa-arrow-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg> <p>Back</p>
                </Link>
            </div>

            <section className="car-section" >
                <Slider images={JSON.parse(vehicle.data.images)} />

                <section className="car-info">
                    <div className="car-brand-model">
                        {/* <Image className='nextimg' width={1000} height={1000} src={process.env.NEXT_PUBLIC_FRONT_IMAGE_HOST+"/assets/img/images/comprar-home/volkswagen-logo.webp"} alt="Logo Volkswagen" /> */}
                        <h3>{vehicle.data.brand} {vehicle.data.model}</h3>
                    </div>
                    <div className="year-km">
                        <p>Manufactured Year: <span>{vehicle.data.year}</span></p>
                        <p>Kilometers: <span>{numberWithCommas(vehicle.data.mileage)} Km</span></p>
                    </div>
                    {/* <h4 className="car-price normal_text">Rs. <span>{vehicle.data.price}</span></h4> */}
                    <h4 className="car-price normal_text"><Price type='Rs.' price={vehicle.data.price}></Price></h4>
                </section>

                <section className="car-technical-data">
                    <h3>Data sheet:</h3>
                    <div className="technical-data">
                        <p>Brand: <span>{vehicle.data.brand}</span></p>
                        <p>Model: <span>{vehicle.data.model}</span></p>
                        <p>Manufactured Year: <span>{vehicle.data.year}</span></p>
                        <p>Kilometers: <span>{numberWithCommas(vehicle.data.mileage)} Km</span></p>
                        <p>Color: <span>{vehicle.data.color}</span></p>
                        <p>Engine: <span>{vehicle.data.engine}</span></p>
                        {/* <p>Transmission: <span>6</span> velocidades</p> */}
                    </div>
                </section>

                <section className="car-seller-info">
                    <h3>Seller Information</h3>
                    <div className="seller-info">
                        <p>Name: <span>{vehicle.data.user?.name}</span></p>
                        <p>Email: <span>{vehicle.data.user?.email}</span></p>
                        <p>Phone Number: <span>
                            <a href={"tel:" + vehicle.data.user?.mobile} >{vehicle.data.user?.mobile}</a>
                        </span></p>
                    </div>
                    <a className="btn-seller-contact" href="#">Contact</a>
                </section>

                <section className="car-description">
                    <h3>Description</h3>
                    <p>
                        {vehicle.data.description}
                    </p>
                </section>

                <section className="car-location">
                    <h3>Vehicle Location</h3>
                    <div className="location">
                        <p>City: <span>{vehicle.data.city}</span></p>
                    </div>
                </section>

                <section className="car-questions">
                    <div className="question">
                        <div ref={success_alert}>
                            {showAlert && <Alert sx={{ color: 'green', fontSize: '14px !important', width: '100%', marginBottom: '20px' }} severity="success">
                                {alertMsg}
                            </Alert>}
                        </div>

                        <form className="question-form" onSubmit={submitQuestion}>
                            <h3>Do you want to ask the seller something?</h3>
                            <textarea
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                name="question" cols="30" rows="10" placeholder="Write your question" minLength="5" maxLength="2500" required></textarea>
                            <input className="btn-preguntar" type="submit" value="Ask" />
                        </form>
                    </div>
                    <div className="previous-questions">
                        <h3>Previous Questions</h3>
                        {unApprovedQuestions.map((item, key) => {
                            return (
                                <div key={key} className="previous-question">
                                    <h4>{item.question} <span onClick={() => handleClickOpen(item, 'unApproved')} className='edit_question'> Edit </span></h4>
                                    <br /><br />
                                </div>
                            )
                        })}
                        {unApprovedAnswers.map((item, key) => {
                            return (
                                <div key={key} className="previous-question">
                                    <h4>{item.question}</h4>
                                    <div className="answer">
                                        <p>{item.answer}
                                            <span onClick={() => handleClickOpen(item, 'unApprovedAnswer')} className='answer_here'> Edit</span></p>
                                    </div>
                                </div>
                            )
                        })}
                        {unAnsweredQuestions.map((item, key) => {
                            return (
                                <div key={key} className="previous-question">
                                    <h4>{item.question}</h4>
                                    <div className="answer">
                                        <p>You have not answer this question yet. Answer
                                            <span onClick={() => handleClickOpen(item, 'unAnswered')} className='answer_here'> here</span></p>
                                    </div>
                                    <br /><br />
                                </div>
                            )
                        })}

                        {answeredQuestions.map((item, key) => {
                            return (
                                <div key={key} className="previous-question">
                                    <h4>{item.question}</h4>
                                    <div className="answer">
                                        <p>
                                            {item.answer}
                                        </p>
                                    </div>
                                    <br /><br />
                                </div>
                            )
                        })}

                        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                            <DialogTitle>Answer the question</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    {questionText}
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Your Answer"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => setQuestionAnswer(e.target.value)}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={submitAnswer}>Submit</Button>
                            </DialogActions>
                        </Dialog>

                        <Dialog
                            open={openLogin}
                            onClose={handleClose} fullWidth maxWidth="sm"
                        >
                            <DialogTitle>{"Please login before ask a question !"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    You need to login before ask a question. Please create an account
                                    if you do not have one. It is so easy.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>

                                <Button onClick={handleSignin}>Login</Button>
                                <Link href={`/auth/sign-up`}><Button>Register</Button></Link>
                                <Button onClick={handleClose}>Ok</Button>
                            </DialogActions>
                        </Dialog>

                        <Dialog
                            open={openEditQuestion}
                            onClose={handleClose} fullWidth maxWidth="sm"
                        >
                            <DialogTitle>Edit your question</DialogTitle>
                            <DialogContent>
                                {/* <DialogContentText id="alert-dialog-slide-description" defaultValue="Hello World">
                                    
                                </DialogContentText> */}
                                <TextField
                                    autoFocus
                                    required
                                    margin="dense"
                                    id="name"
                                    label="Your question"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    defaultValue={questionText}
                                    onChange={(e) => setQuestionText(e.target.value)}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={editQuestion}>Submit</Button>
                            </DialogActions>
                        </Dialog>
                        <Dialog
                            open={openEditAnswer}
                            onClose={handleClose} fullWidth maxWidth="sm"
                        >
                            <DialogTitle>Edit your Answer</DialogTitle>
                            <DialogContent>
                                {/* <DialogContentText id="alert-dialog-slide-description" defaultValue="Hello World">
                                    
                                </DialogContentText> */}
                                <TextField
                                    autoFocus
                                    required
                                    margin="dense"
                                    id="editAnswer"
                                    label="Your answer"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    defaultValue={questionAnswer}
                                    onChange={(e) => setQuestionAnswer(e.target.value)}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={editAnswer}>Submit</Button>
                            </DialogActions>
                        </Dialog>
                        {/* <div className="previous-question">
                            <h4>What use was given to the car?</h4>
                            
                        </div> */}
                    </div>
                </section>
            </section>

            <SimilarVehicles city={vehicle.data.city} />
        </main>

    )
}

Car.layout = "AdminLayout";
export default Car

// params: { slug } comes from url
export const getServerSideProps = async ({ params: { slug } }) => {

    const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/vehicles/' + slug, {
        method: 'get',
        headers: new Headers({
            'Authorization': 'Bearer ' + process.env.API_KEY,
        })
    })

    const vehicle = await res.json()
    // console.log(vehicle)


    if (!vehicle.data) {
        return {
            redirect: { destination: "/404" },
        };
    }


    return {
        props: { vehicle }
    }
}

// export const getStaticPaths = async () => {

//     const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/approved_vehicles', {
//         method: 'get',
//         // headers: new Headers({
//         //     'Authorization': 'Bearer ' + process.env.API_KEY,
//         // })
//     })

//     const vehiclesitems = await res.json()
//     // console.log(vehiclesitems)

//     // const vehicles = [
//     //     { "id": 2, "name": "John", "age": 30, "car": null },
//     //     { "id": 31, "name": "John 2", "age": 32, "car": null },
//     //     { "id": 32, "name": "John 2", "age": 32, "car": null },
//     //     { "id": 33, "name": "John 2", "age": 32, "car": null },
//     //     { "id": 34, "name": "John 2", "age": 32, "car": null },
//     //     { "id": 35, "name": "John 2", "age": 32, "car": null },
//     //     { "id": 36, "name": "John 2", "age": 32, "car": null },
//     //     { "id": 37, "name": "John 2", "age": 32, "car": null },
//     //     { "id": 38, "name": "John 2", "age": 32, "car": null },
//     // ]



//     const paths = vehiclesitems.data.map((vehicle) => ({
//         params: {
//             slug: vehicle.slug.toString()
//         }
//     }));

//     return {
//         paths,
//         fallback: 'blocking'
//     }
// }
