export interface Survey {
  enabled: boolean;
  llamado_dias_planificado: number;
  llamado_dias_vencimiento: number;
  asignacion_tipo: string;
  asignacion_usuarios: any[];
  mapping: Mapping;
  pregunta: string;
}

export interface Mapping {
  score_1: string;
  score_2: string;
  score_3: string;
  score_4: string;
  score_5: string;
}
