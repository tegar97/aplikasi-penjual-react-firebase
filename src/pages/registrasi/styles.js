import {makeStyles} from '@material-ui/styles'
import theme from '../../components/config/theme'


const useStyle = makeStyles({
    title :{
        textAlign : 'center',
        marginButtom : theme.spacing(6)

    },
    paper : {
        marginTop : theme.spacing(8),
        padding : theme.spacing(6)
    },
    button : {
        marginTop : theme.spacing(6),
        
    }
})

export default useStyle