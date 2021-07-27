import { createStore } from "redux"

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Eli Carrasquero (Caquito)",
            foto: "https://avatars.githubusercontent.com/u/2319641?v=4"
        },
        {
            id: 2,
            nombre: "Elyelin Carrasquero (Elshe)",
            foto: "data:image/jpeg;base64,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"
        },
        {
            id: 3,
            nombre: "Cesar Perozo (lolobalolo)",
            foto: "https://scontent.fepa10-2.fna.fbcdn.net/v/t1.6435-9/178436975_558881572168658_2676116567863429647_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeGpJWifAbNdZ1tYeTdtw19a5w3wofGHIUfnDfCh8YchR_WbYV-2dJrw7RFcJOkOEL04AG420KhEEWTr7_t1Nu7I&_nc_ohc=PQVOptPQE14AX8uFuSC&_nc_ht=scontent.fepa10-2.fna&oh=8a6c110dc9987fc92c850271ab687189&oe=6126A414"
        },
        {
            id: 4,
            nombre: "Macarena Ugarte (MAKI)",
            foto: "https://pbs.twimg.com/profile_images/1239554553982353409/rUeVP3ot.jpg"
        },
        {
            id: 5,
            nombre: "Anahi ugarte (ANI)",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8NelpZSpKd3IPLxOshPwKcsvqSNlZLrcaoLcaW_5F8JVf1QB7pMepZkS8UsxvHBcI9ys&usqp=CAU"
        },
        {
            id: 6,
            nombre: "Carolina Franco (CARO)",
            foto: "https://scontent.fepa10-1.fna.fbcdn.net/v/t1.6435-9/158742603_2907812779433281_358943223392559334_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHBp1A0C_GVHuv5xd7WsAN4mSQldeP46suZJCV14_jqyyTbTMGiGwi2YQusMd_xAo0evNR-tdMVGlwGlIz88akO&_nc_ohc=Od0RWPtFSSgAX_QYIY5&tn=EMfKW15q301pThUI&_nc_ht=scontent.fepa10-1.fna&oh=e29f0af76261ff20d1bdbe4d44deeb52&oe=6125DD54"
        },
        {
            id: 7,
            nombre: "Daniela Franco (DANI)",
            foto: "https://lh3.googleusercontent.com/WqVIYQVmqJWUZ8gNMYUdSFcIJXe_x7IOphlejkwcueQQ8Y-I3qLh9E95t4yE6C5PLcCWxA=s85"
        },
        {
            id: 8,
            nombre: "Nilda (Nilda)",
            foto: "https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2018-08/manu-foto.jpg?itok=4HvdRLS7ceived_1693673130717610.jpeg?itok=ey6dQlly"
        },
        {
            id: 9,
            nombre: "Samuel Navas(Samu)",
            foto: "https://scontent.fepa10-2.fna.fbcdn.net/v/t31.18172-8/17504316_10155339949288081_5148128909587537738_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEa7FwKVIIhTrrlHBH-_i3MtrjDtt8KJu62uMO23wom7sDKvpg0tDUL7TDg5bIm8zNTZO3EPGP_bvcyFeNSaEIl&_nc_ohc=WvJfZeJng-gAX9k-6Gr&_nc_oc=AQkuZFBtoiyE81ptb-9etoLndPE51VB7y4nmHJlgNB8oxZ1Krwcac-4vIBCxgrQE0QQ&_nc_ht=scontent.fepa10-2.fna&oh=f5dfbdd7c52c6b76d04316f5078c21cc&oe=6125E068"
        },
        {
            id: 10,
            nombre: "Luz  (1/2)",
            foto: "https://lh3.googleusercontent.com/2l-RF8OGA3thfgXmnpxF2Se78bqLZfGgwlAvzBzIyff-_4-ghPme_XCYQDAVKTdRIL_rpw=s85"
        },
        {
            id: 11,
            nombre: "Yender Reyes",
            foto: "https://lh3.googleusercontent.com/N1rx7ThHljiu2o9HEURP0j997DHfzwg1Q-_Gt7s64DjnyQAEuxL0Ez9eAN5bpUUXfN5RzQ=s85"
        },
    ],

    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === "AGREGAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === "QUITAR_TITULAR")
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    if (action.type === "QUITAR_SUPLENTE")
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }


    return state
}

export default createStore(reducerEntrenador)