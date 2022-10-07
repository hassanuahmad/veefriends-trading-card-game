import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const CardForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.card?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.card?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="pageName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Page name
        </Label>

        <TextField
          name="pageName"
          defaultValue={props.card?.pageName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pageName" className="rw-field-error" />

        <Label
          name="image"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image
        </Label>

        <TextField
          name="image"
          defaultValue={props.card?.image}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="image" className="rw-field-error" />

        <Label
          name="score"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Score
        </Label>

        <NumberField
          name="score"
          defaultValue={props.card?.score}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="score" className="rw-field-error" />

        <Label
          name="aura"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Aura
        </Label>

        <NumberField
          name="aura"
          defaultValue={props.card?.aura}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="aura" className="rw-field-error" />

        <Label
          name="skill"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Skill
        </Label>

        <NumberField
          name="skill"
          defaultValue={props.card?.skill}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="skill" className="rw-field-error" />

        <Label
          name="stamina"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Stamina
        </Label>

        <NumberField
          name="stamina"
          defaultValue={props.card?.stamina}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="stamina" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CardForm
