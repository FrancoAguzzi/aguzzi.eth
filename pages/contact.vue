<template>
    <div class="contact">
        <TheHeader :isStar="true"></TheHeader>
        <main>
            <h1 class="contact__title">Hands on! Let's reach the
                next level together! </h1>
            <form id="contact-form" class="contact__form" @submit.prevent="goToThanksPage">
                <input v-model="name" type="text" name="name" id="name" required placeholder="Name*">
                <input v-model="phone" type="tel" name="phone" id="phone" required placeholder="Phone*">
                <input v-model="email" type="email" name="email" id="email" required placeholder="E-mail*">
                <div class="contact__form-checkbox">
                    <input v-model="pricingUnderstand" type="checkbox" name="pricingUnderstand" id="pricingUnderstand"
                        required>
                    <label for="pricingUnderstand">I understand Franco's daily rate is £200</label>
                </div>
                <textarea v-model="message" name="message" id="message" placeholder="How can I help you?"></textarea>
                <input class="contact__form-submit" type="submit" :value="inputValue">
            </form>
        </main>
    </div>
</template>

<script>
export default {
    name: 'ContactPage',
    data() {
        return {
            name: '',
            phone: '',
            email: '',
            message: '',
            pricingUnderstand: false,
            inputValue: 'SUBMIT'
        }
    },
    methods: {
        goToThanksPage() {
            this.inputValue = 'LOADING';

            setInterval(() => {
                if (this.inputValue !== 'LOADING...') {
                    this.inputValue += '.'
                } else {
                    this.inputValue = 'LOADING'
                }
            }, 1000)

            const form = new FormData(document.getElementById('contact-form'));

            fetch('https://script.google.com/macros/s/AKfycbwsV0Whvruneq3e6LFI9hEHxN4q06WwsbqPHA9FLKUdebWFUDvuubYfz7xB7_AMc_WL/exec', {
                method: 'POST',
                body: form
            }).then(() => {
                window.location.href = '/?thankyou=true'
            }).catch((e) => {
                window.location.href = '/?thankyou=false'
            }).finally(() => {
                clearInterval
            })
        }
    }
}
</script>

<style lang="scss">
.contact {
    &__title {
        font-family: $secondary-font;
        background: linear-gradient(180deg,
                #FFE603 9.38%,
                #EB6035 30.21%);
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0 40px 80px;
        text-align: center;

        @media screen and (min-width: 768px) {
            font-size: 36px;
            margin-top: 60px;
        }

        @media screen and (min-width: 1024px) {
            margin-top: -20px;
        }
    }

    &__form {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 500px;

        input,
        textarea {
            border: none;
            border-bottom: 2px solid $font-color;
            padding: 10px;
            background: transparent;
            font-family: $primary-font;
            font-size: 16px;
            margin: 0 20px 30px;
            max-width: 500px;
        }

        textarea {
            border: 2px solid $font-color;
        }

        &-checkbox {
            display: flex;
            align-items: center;
            font-family: $primary-font;
            font-size: 16px;
            margin-bottom: 30px;

            input {
                margin: 0 15px 0 20px;
            }
        }

        input.contact__form-submit {
            font-family: $secondary-font;
            background: conic-gradient(from 188.3deg at 50% 50%, #FFE603 0deg, rgba(255, 230, 3, 0) 360deg);
            border: none;
            font-size: 28px;
            cursor: pointer;
        }
    }
}
</style>