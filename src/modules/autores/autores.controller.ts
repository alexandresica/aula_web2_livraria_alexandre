import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AutoresService } from './autores.service';
import { AtualizarAutordto, CriarAutordto } from './autores.dto';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Get('/listar-autores')
  async listarAutores() {
    return await this.autoresService.listarAutores();
  }

  @Get('/listar-autor/:id')
  async listarAutor(@Param('id', ParseIntPipe) id: number) {
    return await this.autoresService.listarAutor(id);
  }

  @Post('/criar-autor')
  async criarAutor(@Body() bodyRequest: CriarAutordto) {
    return await this.autoresService.criarAutor(bodyRequest);
  }

  @Put('/atualizar-autor/:id')
  async atualizarAutor(
    @Param('id', ParseIntPipe) idautor: number,
    @Body() bodyrequest: AtualizarAutordto,
  ) {
    return await this.autoresService.atualizarAutor(idautor, bodyrequest);
  }

  @Delete('/deletar-autor/:id')
  async deletarAutor(@Param('id', ParseIntPipe) idAutor: number) {
    return await this.autoresService.deletarAutor(idAutor);
  }

  @Put('/inativar-autor/:id')
  async inativarAutor(@Param('id', ParseIntPipe) idAutor: number) {
    return await this.autoresService.inativarAutor(idAutor);
  }
}
