import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Posting from "App/Models/Posting";

export default class extends BaseSeeder {
  public async run () {
    await Posting.create({
      title:"pengabdi setan 2 Comunion",
      description: "dalah sebuah film horor Indonesia tahun 2022 yang disutradarai dan ditulis oleh Joko Anwar sebagai sekuel dari film tahun 2017, Pengabdi Setan.",
      rating: 7,
      image: null,
    })
  }
}
