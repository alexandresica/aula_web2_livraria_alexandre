import { Body, Controller, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CriarUsuariodto } from './usuarios.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuarioService: UsuariosService) {}

  @Post('criar-usuario')
  async cirarUsuario(@Body() bodyrequest: CriarUsuariodto) {
    return await this.usuarioService.criarUsuario(bodyrequest);
  }
}
