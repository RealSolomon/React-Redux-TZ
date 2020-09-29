import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { Button } from '@material-ui/core'
import { addUser } from '../redux/actions/users'
import { v1 as uuid } from 'uuid'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const currencies = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
]

const programs = [
  {
    value: 'N',
    label: 'Недоступна',
  },
  {
    value: 'C',
    label: 'Пластиковая Карта',
  },
  {
    value: 'M',
    label: 'Мобильное Приложение',
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  plh: {
    width: '55%',
    marginTop: '23px',
  },
  btn: {
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    top: '85%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -15%)',
  },
  date: {
    marginTop: '5vh',
    textAlign: 'center',
    position: 'relative',
  },
}))

export default function Register() {
  const classes = useStyles()
  const [currency, setCurrency] = React.useState('')
  const [program, setProgram] = React.useState('N')
  const [data, setData] = React.useState()
  let [name, setName] = React.useState('')
  let [surname, setSurname] = React.useState('')
  let dispatch = useDispatch()

  const handleChange = (event) => {
    setCurrency(event.target.value)
  }

  const handleProgramChange = (event) => {
    setProgram(event.target.value)
  }
  const handleNameChanger = (event) => {
    setName(event.target.value)
  }
  const handleSurnameChanger = (event) => {
    setSurname(event.target.value)
  }
  const date = new Date().toLocaleDateString()

  // let request = new XMLHttpRequest()
  // let url = 'https://meowfacts.herokuapp.com/'

  // request.open('GET', url, false)
  // request.send()

  // let response = request.response
  // let data = JSON.parse(response)

  // let randDate = JSON.stringify(data['data']).slice(1, -1)

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://meowfacts.herokuapp.com/')

      setData(JSON.stringify(result.data['data']).slice(1, -1))
    }

    fetchData()
  }, [])

  // let randDate = JSON.stringify(data)

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.plh}>
          <TextField
            id="outlined-full-width1"
            label="Имя"
            value={name}
            onChange={handleNameChanger}
            style={{ margin: 8 }}
            placeholder="Введите Имя"
            helperText="Имя Пользователя!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
        <div className={classes.plh}>
          <TextField
            id="outlined-full-width2"
            label="Фамилия"
            value={surname}
            onChange={handleSurnameChanger}
            style={{ margin: 8 }}
            placeholder="Введите Фамилию"
            helperText="Фамилия Пользователя!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
        <div className={classes.plh}>
          <TextField
            id="outlined-select-currency"
            style={{ margin: 8, width: '100%' }}
            select
            label="Пол"
            value={currency}
            onChange={handleChange}
            helperText="Укажите Ваш пол"
            variant="outlined"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className={classes.plh}>
          <TextField
            id="outlined-select-currency"
            style={{ margin: 8, width: '100%' }}
            select
            label="Программа Лояльности"
            value={program}
            onChange={handleProgramChange}
            helperText="Выберети один из вариантов"
            variant="outlined"
          >
            {programs.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        {program === 'C' ? (
          <div className={classes.plh}>
            <TextField
              id="outlined-full-width"
              label="Карта"
              style={{ margin: 8 }}
              placeholder="Введите Номер Карты"
              helperText="Введите Номер Карты!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </div>
        ) : (
          false
        )}
      </div>
      <div className={classes.date}>{date}</div>
      <div className={classes.date}>{data}</div>
      <Button
        onClick={() => {
          dispatch(
            addUser({
              id: uuid(),
              name: name,
              surname: surname,
              date: date,
            })
          )
          setName('')
          setSurname('')
        }}
        className={classes.btn}
        variant="contained"
        color="primary"
      >
        Сохранить
      </Button>
    </div>
  )
}
