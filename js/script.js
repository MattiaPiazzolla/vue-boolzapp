// DEFINISCO L'APP VUE
const { createApp } = Vue;

createApp({
    data(){
        return{
            // INSERISCO L'ARRAY NELLA STRUTTURA DELL'APP
            // HO AGGIUNTO IL VALORE EDIT AI MESSAGGI 
            contacts: [
                {
                    name: 'TEST',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages:[
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 16:15:22',
                            message: 'BANANA!',
                            status: 'received',
                            edit: false,
                            visibleMsg: false,
                        },
                    ]
                },{
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages:[
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            edit: false,
                            visibleMsg: false,
                        },
                    ]
                },{
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },
                    ]
                },{
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            edit: false,
                            visibleMsg: false,
                        },
                    ]
                },{
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages:[
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            edit: false,
                            visibleMsg: false,
                        },
                    ]
                },{
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages:[
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            edit: false,
                            visibleMsg: false,
                        },
                    ]
                },{
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages:[
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },
                    ]
                },{
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages:[
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            edit: false,
                            visibleMsg: false,
                        },
                    ]
                },{
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages:[
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            edit: false,
                            visibleMsg: false,
                        },{
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            edit: false,
                            visibleMsg: false,
                        },
                    ]
                },
                
            
            ],
            randomRepMsg: [
                'Ok',
                'Certo!',
                'Va bene',
                'Non posso farlo ora, scusa',
                'Ti rispondo dopo',
                'Ottima idea!',
                'Ci sto!',
                'Carbonara',
                'Sì, assolutamente.',
                'Ci vediamo più tardi',
                'A dopo',
                'Ti faccio sapere',
                'Gentilissima',
                'Perfetto, grazie!',
                '...',
                'letsgoski',
                '😀',
                '🏀',
                '🔥'
            ],
            // DEFINISCO LA CHAT ATTIVA
            activeChat: 0,
            // DEFINISCO UN VARIABILE, NELLA QUALE ANDRO A PUSHARE COME MESSAGGIO 
            newMsg: '',
            // DEFINISCO UNA VARIABILE PER LA BARRA DI RICERCA 
            searchChat: '',
            // DEFINISCO UNA VARIABILE PER LA RICERCA DEI MESSAGGI
            searchMsg: '',
            // DEFINISCO UN'ARRAY PER LE EMOTICON
            emojis: ["😀","😃","😄","😁","😆","😅","😂","🤣","🥲","🥹","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🥸","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","☹️","😣","😖","😫","😩","🥺","😢","😭","😮‍💨","😤","😠","😡","🤬","🤯","😳","🥵","🥶","😱","😨","😰","😥","😓","🫣","🤗","🫡","🤔","🫢","🤭","🤫","🤥","😶","😶‍🌫️","😐","😑","😬","🫨","🫠","🙄","😯","😦","😧","😮","😲","🥱","😴","🤤","😪","😵","😵‍💫","🫥","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠","😈","👿","👹","👺","🤡","💩","👻","💀","☠️","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾","👋","🤚","🖐","✋","🖖","👌","🤌","🤏","✌️","🤞","🫰","🤟","🤘","🤙","🫵","🫱","🫲","🫸","🫷","🫳","🫴","👈","👉","👆","🖕","👇","👍","👎","✊","👊","🤛","🤜","👏","🫶","🙌","👐","🤲","🤝","🙏","💅","🤳","💪","🦾","🦵","🦿","🦶","👣","👂","🦻","👃","🫀","🫁","🧠","🦷","🦴","👀","👁","👅","👄","🫦","💋","🩸","🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐻‍❄️","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🐵","🙈","🙉","🙊","🐒","🐔","🐧","🐦","🐦‍⬛","🐤","🐣","🐥","🦆","🦅","🦉","🦇","🐺","🐗","🐴","🦄","🐝","🪱","🐛","🦋","🐌","🐞","🐜","🪰","🪲","🪳","🦟","🦗","🕷","🕸","🦂","🐢","🐍","🦎","🦖","🦕","🐙","🦑","🦐","🦞","🦀","🪼","🪸","🐡","🐠","🐟","🐬","🐳","🐋","🦈","🐊","🐅","🐆","🦓","🫏","🦍","🦧","🦣","🐘","🦛","🦏","🐪","🐫","🦒","🦘","🦬","🐃","🐂","🐄","🐎","🐖","🐏","🐑","🦙","🐐","🦌","🫎","🐕","🐩","🦮","🐕‍🦺","🐈","🐈‍⬛","🪽","🪶","🐓","🦃","🦤","🦚","🦜","🦢","🪿","🦩","🕊","🐇","🦝","🦨","🦡","🦫","🦦","🦥","🐁","🐀","🐿","🦔","🐾","🐉","🐲","🌵","🎄","🌲","🌳","🌴","🪹","🪺","🪵","🌱","🌿","☘️","🍀","🎍","🪴","🎋","🍃","🍂","🍁","🍄","🐚","🪨","🌾","💐","🌷","🪷","🌹","🥀","🌺","🌸","🪻","🌼","🌻","🌞","🌝","🌛","🌜","🌚","🌕","🌖","🌗","🌘","🌑","🌒","🌓","🌔","🌙","🌎","🌍","🌏","🪐","💫","⭐️","🌟","✨","💥","🔥","🌪","🌈","🌤","⛅️","🌥","🌦","🌧","🌩","🌨","⛄️","🌬","💨","💧","💦","🫧","🌊","⚽️","🏀","🏈","⚾️","🥎","🎾","🏐","🏉","🥏","🎱","🪀","🏓","🏸","🏒","🏑","🥍","🏏","🪃","🥅","⛳️","🪁","🏹","🎣","🤿","🥊","🥋","🎽","🛹","🛼","🛷","🥌","🎿","🏂","🪂","🏋️‍♀️","🏋️","🏋️‍♂️","🤼‍♀️","🤼","🤼‍♂️","🤸‍♀️","🤸","🤸‍♂️","⛹️‍♀️","⛹️","⛹️‍♂️","🤺","🤾‍♀️","🤾","🤾‍♂️","🏌️‍♀️","🏌️","🏌️‍♂️","🏇","🧘‍♀️","🧘","🧘‍♂️","🏄‍♀️","🏄","🏄‍♂️","🏊‍♀️","🏊","🏊‍♂️","🤽‍♀️","🤽","🤽‍♂️","🚣‍♀️","🚣","🚣‍♂️","🧗‍♀️","🧗","🧗‍♂️","🚵‍♀️","🚵","🚵‍♂️","🚴‍♀️","🚴","🚴‍♂️","🏆","🥇","🥈","🥉","🏅","🎖","🏵","🎗","🎫","🎟","🎪","🤹","🤹‍♂️","🤹‍♀️","🎭","🩰","🎨","🎬","🎤","🎧","🎼","🎹","🥁","🪘","🪇","🎷","🎺","🪗","🎸","🪕","🎻","🪈","🎲","🎯","🎳","🎮","🎰","🚗","🚕","🚙","🚌","🚎","🏎","🚓","🚑","🚒","🚐","🛻","🚚","🚛","🚜","🦯","🦽","🦼","🛴","🚲","🛵","🏍","🛺","🚨","🚔","🚍","🚘","🚖","🛞","🚡","🚠","🚟","🚃","🚋","🚞","🚝","🚄","🚅","🚈","🚂","🚆","🚇","🚊","🚉","✈️","🛫","🛬","🛩","💺","🛰","🚀","🛸","🚁","🛶","⛵️","🚤","🛥","🛳","🚢","⚓️","🛟","🪝","⛽️","🚧","🚦","🚥","🚏","🗺","🗿","🗽","🗼","🏰","🏯","🏟","🎡","🎢","🛝","🎠","⛲️","🏖","🏝","🏜","🌋","🏔","🗻","🏕","⛺️","🛖","🏠","🏡","🏘","🏚","🏗","🏭","🏢","🏬","🏣","🏤","🏥","🏦","🏨","🏪","🏫","🏩","💒","🏛","⛪️","🕌","🕍","🛕","🕋","🛤","🛣","🗾","🎑","🏞","🌅","🌄","🌠","🎇","🎆","🌇","🌆","🏙","🌃","🌌","🌉","🌁"],
            // AGGIUNGO UNA VARIABILE CHE MUTERA AIUTANDOMI A RENDERE VISIBILE LA BARRA DI RICERCA 
            showSearchBar: false,
        
        }
        
    },
    methods: {
        // AGGIUNGO IL METODO PER CAMBIARE LA CHAT SELEZIONATA IN BASE AL CLICK 
        clickedChat(index){
            this.activeChat = index;
        },
        // FUNZIONE PER INVIARE MESSAGGI
        sendNewMsg(){
            // DATA ATTUALE (SOLUZIONE TROVATA SU INTERNER, ESISTE QUALCOSA DI PIÙ PRATICO)
            let currentdate = new Date(); 
            let datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours().toString().padStart(2, '0') + ":"  
                + currentdate.getMinutes().toString().padStart(2, '0') + ":" 
                + currentdate.getSeconds();
            if (this.newMsg != null){
                // PUSHO IL NUOVO MESSAGGIO NELLL'ARRAY DENTRO L'ARRAY
                this.contacts[this.activeChat].messages.push({message:this.newMsg, status: 'sent', date:`${datetime}`});
                // RESETTO IL CAMPO TESTO UNA VOLTA "INVIATO" IL MESSAGGIO
                this.newMsg = null;
                
                // CHIAMO LA FUNZIONE PER SCROLLARE ALL'ULTIMO MESSAGGIO 
                this.scrollToLastMessage();   
                
                // DEFINISCO UN SETTIMEOUT CHE CHIAMA UNA FUNZIONE DOPO UN SECONDO 
                setTimeout(() => {
                    // GENERO UN NUMERO RANDOM CHE UTILIZZERÒ COME INDEX PER LE MIE RISPOSTE
                    const randomRepIndex = Math.floor(Math.random() * this.randomRepMsg.length);
                    // GENERO IL MESSAGGIO DI RISPOSTA 
                    // AGGIUNGO IL MESSAGGIO RANDOM PESCATO DALL'ARRAY SOPRA E VARIABILE CON L'INDEX GENERATO RANDOMICAMENTE 
                    this.contacts[this.activeChat].messages.push({message:this.randomRepMsg[randomRepIndex], status: 'received', date:`${datetime}`, edit: false,})
                    // CHIAMO LA FUNZIONE PER SCROLLARE ALL'ULTIMO MESSAGGIO 
                    this.scrollToLastMessage();   

                }, 1000);
            } 
        },
        // DEFINISCO LA FUNZIONE CHE FILTRERA I CONTATTI 
        filterContacts() {
            // DEFINISCO UN CICLO FOREACH CHE VAGLI I CONTATTI E CONTROLLA SE IL VALORE PASSATO A SEARCHCHAT È INCLUSO NELL'ARRAY DEI NOMI 
            this.contacts.forEach((contact) => {
                contact.visible = contact.name.toLowerCase().includes(this.searchChat.toLowerCase());
            });
            
        },
        // DEFINISCO LA FUNZIONE PER ELIMINARE I MESSAGGI
        deleteMsg(index){
            if(confirm('Sei sicuro di voler cancellare questo messaggio?')){
                // VADO A PRENDERE L'ELEMENTO CHE DEVO ELIMINARE NELLA CHAT ATTIVA E GLI APPLICO SPLICE
                this.contacts[this.activeChat].messages.splice(index, 1);
            }
        },


        // SOLUZIONE PER LO SCROLL TROVATA SU INTERNET 
        scrollToLastMessage() {
            // CHIAMO IL TIMEOUT PER DARE TEMPO ALLA PAGINA DI AGGIORNARSI 
            setTimeout(() => {
                // PACCHETTO INTERNET
                const lastChildElement =
                this.$refs.msgContainer.lastElementChild;
                lastChildElement?.scrollIntoView({
                behavior: 'smooth',
            },500)
             });
        },
        // AGGIUNGO UNA FUNZIONE PER INSERIRE NELLA BARRA DI RICERCA 
        addEmoji(emojis) {
            // INSERISCO L'EMOJI NELLA BARRA INPUT DEI MESSAGGI
            setTimeout(() => {
                this.newMsg += emojis;
            },100)
        },
        // AGGIUNGO LA FUNZIONE PER EDITARE I MESSAGGI
        editMsg(index){
            this.contacts[this.activeChat].messages.edit = !this.contacts[this.activeChat].messages.edit;
        },

        // AGGIUNGO UNA FUNZIONE PER FAR COMPARIRE LA BARRA DI RICERCA DEI MESSAGGI 
        toggleSearchBar() {
            this.showSearchBar = !this.showSearchBar;
        },
        filterMsg() {
            // DEFINISCO UN CICLO FOREACH CHE CONTROLLA SE I VALORI INSERITI IN SEARCHMSG SONO CONTENUTI NEL MESSAGGIO 
            this.contacts.forEach((contact) => {
                contact.message.visibleMsg = this.contact[this.activeChat].messages.message.toLowerCase().includes(this.searchMsg.toLowerCase());
                console.log()
            });
            
        }, 
        searchChatFunction() {
            // RESETTO TUTTI I VISIBLEMSG ALL'INIZIO DELL FUNZIONE 
            this.contacts.forEach(contact => {
                contact.messages.forEach(message => {
                    message.visibleMsg = false;
                });
            });

            // CONFRONTO IL VALORE INSERITO IN searchMsg CON IL VALORE DEI MESSAGGI NELLA CHAT ATTVA
            this.contacts[this.activeChat].messages.forEach(message => {
                message.visibleMsg = message.message.toLowerCase().includes(this.searchMsg.toLowerCase());
            });

            // SCROLLO LA PAGINA FINO AL PRIMO MESSAGGIO CON visibleMsg = TRUE
            
        }
    },

}).mount('#app')