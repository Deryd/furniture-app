import React from 'react';
import { FurnitureItem } from './FurnitureItem'
import Grid from '@material-ui/core/Grid';
import { IFurnitureList, IFurniture } from "../components/Interfaces";
import { CardHeader } from '@material-ui/core';

export const FurnitureList: React.FC<IFurnitureList> = (props) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <h2> Products </h2>
            </Grid>
            {
                props.furniture.map((item: IFurniture, index) => {
                    return <FurnitureItem key={index} id={item.id} header={item.header} text={item.text} cardheader={item.cardheader}/>
                })
            }
        </Grid>
    );
}