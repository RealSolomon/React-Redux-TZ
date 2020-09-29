import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

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
    marginTop: '13px',
  },
}))

export default function Form() {
  const classes = useStyles()
  const [currency, setCurrency] = React.useState('')
  const [program, setProgram] = React.useState('N')

  const handleChange = (event) => {
    setCurrency(event.target.value)
  }

  const handleProgramChange = (event) => {
    setProgram(event.target.value)
  }

  return (
    <div className={classes.root}>
      <div className={classes.plh}>
        <TextField
          id="outlined-full-width"
          label="Имя"
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
          id="outlined-full-width"
          label="Фамилия"
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
  )
}
