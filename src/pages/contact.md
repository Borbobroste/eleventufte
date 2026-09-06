---
title: Contact
permalink: "/contact/"
---

<p>Vous pouvez me contacter via ce formulaire :</p>

<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="contact-form">

  <input type="hidden" name="form-name" value="contact">

  <p class="hidden-field">
    <label>
      Ne pas remplir : <input name="bot-field">
    </label>
  </p>

  <p>
    <label for="name">Nom</label>
    <input type="text" id="name" name="name" autocomplete="name" required>
  </p>

  <p>
    <label for="email">Adresse e-mail</label>
    <input type="email" id="email" name="email" autocomplete="email" required>
  </p>

  <p>
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="8" required></textarea>
  </p>

  <p>
    <button type="submit">Envoyer →</button>
  </p>

</form>
