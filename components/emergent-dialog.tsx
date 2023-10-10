
import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { Button } from "../Button"
import { Dispatch, SetStateAction } from "react"


interface EmergentDialogProps {
    open: boolean
    setDialogOpen: Dispatch<SetStateAction<boolean>>
}

const EmergentDialog = ({ open, setDialogOpen }: EmergentDialogProps) => {

    return (
        <Dialog open={open}>
            <DialogTitle className="bg-white">
                <span className="font-semibold">Más sobre mi:</span>
            </DialogTitle>
            <DialogContent className="bg-white">
                <div className="flex flex-col gap-2">
                    <span>
                        Soy una persona respetuosa de buenos
                        valores y educación, soy cordial, servicial y respetuoso.
                        Manejo un gran sentido de pertenencia, con buena capacidad
                        de trabajar en grupo y dispuesta a escuchar, no soy una persona
                        de conflictos y manejo la calma, con capacidad
                        de decisión al trabajar bajo presión. Me gusta
                        alcanzar cada una de las metas que me
                        propongo.
                    </span>
                </div>
            </DialogContent>

            <DialogTitle className="bg-white">
                <span className="font-semibold">Experiencia:</span>
            </DialogTitle>
            <DialogContent className="bg-white">
                <div className="flex flex-col gap-2">

                    <span className="font-semibold">Soporte Técnico</span>
                    <span className="font-semibold">Facultad Nacional de Salud Pública</span>
                    <span>2019 - Presente</span>
                    <span>
                        He estado al frente del área de servicios y soporte informático
                        en la facultad Nacional de salud pública, desde la coordinación de los
                        auxiliares, así como la administración de recursos que alli se encuentran.
                        En todo momento se tiene contacto directo con diferentes usuarios, por lo que 
                        considero que me he familiarizado enormente con el traro al usuario, así como adquirido
                        un enorme sentido de pertenencia y responsabilidad al estar encargado de esta área.
                    </span>
                </div>

                <div className="w-1/6">
                <Button text="Cerrar" type="secondary" handleClick={
                    () => { setDialogOpen(false) }
                } />
            </div>
            </DialogContent>

        </Dialog>
    )
}

export { EmergentDialog }