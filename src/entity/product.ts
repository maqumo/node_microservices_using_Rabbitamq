import { Entity } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id :number;


    @Column()
    title : String;
    
    @Column()
    image : String;

    
    @Column({default:0})
    Likes : number;




}