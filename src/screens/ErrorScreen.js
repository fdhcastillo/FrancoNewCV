import React from 'react'
import { Link } from 'react-router-dom'
import { ErrorFlex } from '../styled-components/ErrorScreenCss'

export const ErrorScreen = () => {
  return (
      <ErrorFlex>
        <section class="nes-container is-dark">
          <section class="message-list">
            <section class="message -left">
              <div class="nes-balloon from-left is-dark">
                <p>Oh no ! Where am I ?</p>
              </div>
            </section>
            <i class="nes-ash"></i>
            <section class="message -right">
              <div class="nes-balloon from-right is-dark">
                <p>Relax Ash, Your are in "PAGE NOT FOUND" just return to <Link to="/" class="nes-btn is-error">Home</Link> and You will safe</p>
              </div>
            </section>
            <div style={{display: 'flex', flexDirection:'row-reverse'}}>
              <i class="nes-bulbasaur"></i>
            </div>
          </section>
          <section class="message -left">
              <div class="nes-balloon from-left is-dark">
                <p>Thank you so much Bulbasaur, you are my favourite Pokemon</p>
              </div>
            </section>
            <i class="nes-ash"></i>
        </section>
      </ErrorFlex>
  )
}
