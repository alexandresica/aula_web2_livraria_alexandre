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
  listarAutores() {
    return this.autoresService.listarAutores;
  }

  @Get('/listar-autor/:id')
  listarAutor(@Param('id', ParseIntPipe) id: number) {
    return this.autoresService.listarAutor(id);
  }

  @Post('/criar-autor')
  criarAutor(@Body() bodyRequest: CriarAutordto) {
    return this.autoresService.criarAutor(bodyRequest);
  }

  @Put('/atualizar-autor/:id')
  atualizarAutor(
    @Param('id', ParseIntPipe) idautor: number,
    @Body() bodyrequest: AtualizarAutordto,
  ) {
    return this.autoresService.atualizarAutor(idautor, bodyrequest);
  }

  @Delete('/deletar-autor/:id')
  deletarAutor(@Param('id', ParseIntPipe) idAutor: number) {
    return this.autoresService.deletarAutor(idAutor);
  }
}
